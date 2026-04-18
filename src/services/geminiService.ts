import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });

export const transformRoom = async (
  imageBase64: string,
  stylePrompt: string,
  onProgress?: (message: string) => void
): Promise<string> => {
  try {
    if (onProgress) onProgress("正在分析空间结构...");
    
    // Extract base64 data and mime type
    const mimeType = imageBase64.split(';')[0].split(':')[1];
    const base64Data = imageBase64.split(',')[1];

    if (onProgress) onProgress("正在应用艺术渲染...");

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Data,
              mimeType: mimeType,
            },
          },
          {
            text: stylePrompt + " Return the renovated image. Ensure it keeps the exact same spatial layout (walls, windows, doors) but changes the materials, furniture, and lighting.",
          },
        ],
      },
    });

    if (onProgress) onProgress("正在生成高清效果图...");

    // Find the image part in the response
    let resultImageBase64 = "";
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        resultImageBase64 = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        break;
      }
    }

    if (!resultImageBase64) {
      throw new Error("AI did not return an image. It might have only returned text.");
    }

    return resultImageBase64;
  } catch (error) {
    console.error("Renovation failed:", error);
    throw error;
  }
};
