import { Injectable } from '@angular/core';
import emojiUnicodeMap from 'src/assets/data/emoji-unicode-map.json';

function escapeRegExp(str: string): string {
  // Escapa todos os caracteres especiais de regex
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

@Injectable({
  providedIn: 'root'
})
export class EmojiService {
  private emojiToUnicodeMap: { [key: string]: string } = emojiUnicodeMap;

  constructor() {}

  /**
   * Converte emojis em uma mensagem para seu equivalente em unicode
   * @param message - A mensagem contendo emojis
   * @returns A mensagem com emojis convertidos para unicode
   */
  convertEmojisToUnicode(message: string): string {
    let convertedMessage = message;
    for (const [emoji, unicode] of Object.entries(this.emojiToUnicodeMap)) {
      const safeEmoji = escapeRegExp(emoji);
      convertedMessage = convertedMessage.replace(new RegExp(safeEmoji, 'g'), unicode);
    }
    return convertedMessage;
  }

  /**
   * Converte unicode literal (\\uXXXX) em emojis
   * @param message - A mensagem contendo unicode literal
   * @returns A mensagem com unicode convertido para emojis
   */
  convertUnicodeToEmojis(message: string): string {
    let converted = message;
    for (const [emoji, unicode] of Object.entries(this.emojiToUnicodeMap)) {
      const unicodeWithDoubleSlash = unicode.replace(/\\u/g, '\\\\u');
      const safeUnicode = escapeRegExp(unicodeWithDoubleSlash);
      // Caso 1: padrões com barra dupla (\\uXXXX)
      converted = converted.replace(new RegExp(safeUnicode, 'g'), emoji);

      // Caso 2: padrões com barra simples (\uXXXX)
      const safeUnicodeSingle = escapeRegExp(unicode);
      converted = converted.replace(new RegExp(safeUnicodeSingle, 'g'), emoji);
    }
    return converted;
  }

  /**
   * Retorna o mapa completo de emojis para unicode
   * @returns O mapa de emojis
   */
  getEmojiMap(): { [key: string]: string } {
    return this.emojiToUnicodeMap;
  }
}
