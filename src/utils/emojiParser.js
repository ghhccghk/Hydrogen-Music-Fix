/**
 * 网易云音乐表情映射工具
 * 将文字表情转换为emoji或图片表情
 */

// 网易云音乐官方表情及常用表情映射表
export const ALL_EMOJI_MAP = {
  // 开心类
  '[呲牙]': '😃',
  '[大笑]': '😆',
  '[可爱]': '😊',
  '[色]': '😍',
  '[得意]': '😏',
  '[嘿哈]': '😄',
  '[笑哭]': '😂',
  '[奸笑]': '😈',
  '[憨笑]': '😁',
  '[机智]': '🤓',
  '[惊喜]': '🤩',
  '[送心]': '🥰',
  '[调皮]': '😜',
  '[舔屏]': '😋',
  '[哇]': '😮',
  '[赞]': '👍',
  '[偷笑]': '🤭',
  '[愉快]': '😁',
  '[嘻嘻]': '😄',
  '[Mufasa]': '🦁',

  // 难过类
  '[泪]': '😢',
  '[大哭]': '😭',
  '[悲伤]': '😔',
  '[流泪]': '😭',
  '[可怜]': '🥺',
  '[委屈]': '😪',
  '[失望]': '😞',
  '[心碎]': '💔',
  '[裂开]': '😵',
  '[抱抱]': '🤗',
  '[皱眉]': '😟',
  '[丧]': '😞',
  '[叹气]': '😮‍💨',

  // 生气类
  '[怒]': '😠',
  '[抓狂]': '🤬',
  '[生气]': '😡',
  '[发火]': '😤',
  '[鄙视]': '🙄',
  '[白眼]': '🙄',
  '[傲慢]': '😤',
  '[不屑]': '😒',
  '[冷漠]': '😑',

  // 惊讶/疑问类
  '[惊恐]': '😱',
  '[震惊]': '😲',
  '[惊讶]': '😮',
  '[呆]': '😐',
  '[无语]': '😑',
  '[疑问]': '❓',
  '[晕]': '😵',
  '[汗]': '😅',
  '[思考]': '🤔',
  '[石化]': '🗿',
  '[what]': '🤔',
  '[黑线]': '😑',
  '[问号]': '❓',
  '[惊讶]': '😯',
  '[汗]': '😓',

  // 其他情绪/状态
  '[睡]': '😴',
  '[呕吐]': '🤮',
  '[酷]': '😎',
  '[阴险]': '😏',
  '[害羞]': '😳',
  '[闭嘴]': '🤐',
  '[鬼脸]': '😝',
  '[困]': '😪',
  '[生病]': '😷',
  '[口罩]': '😷',
  '[OK]': '👌',
  '[捂脸]': '🤦',
  '[恐惧]': '😨',
  '[抠鼻]': '🙄',
  '[撇嘴]': '😒',
  '[囧]': '囧',

  // 手势类
  '[强]': '👍',
  '[弱]': '👎',
  '[拳头]': '✊',
  '[胜利]': '✌️',
  '[good]': '👍',
  '[no]': '🙅',
  '[加油]': '💪',
  '[鼓掌]': '👏',
  '[祈祷]': '🙏',
  '[作揖]': '🙏',
  '[握手]': '🤝',
  '[抱拳]': '🙏',
  '[勾引]': '😏',
  
  // 物品/符号类
  '[爱心]': '❤️',
  '[玫瑰]': '🌹',
  '[凋谢]': '🥀',
  '[太阳]': '☀️',
  '[月亮]': '🌙',
  '[下雨]': '🌧️',
  '[星星]': '⭐',
  '[音乐]': '🎵',
  '[礼物]': '🎁',
  '[蛋糕]': '🎂',
  '[咖啡]': '☕',
  '[啤酒]': '🍺',
  '[飞机]': '✈️',
  '[汽车]': '🚗',
  '[红包]': '🧧',
  '[炸弹]': '💣',
  '[刀]': '🔪',
  '[菜刀]': '🔪',
  '[庆祝]': '🎉',
  '[磕头]': '🙇',
  '[回头]': '👀',
  '[跳绳]': '💃',
  '[挥手]': '👋',
  '[激动]': '🤩',
  '[街舞]': '🕺',
  '[献吻]': '😘',
  '[左太极]': '☯️',
  '[右太极]': '☯️',
  
  // 动物类
  '[猪头]': '🐷',
  '[熊猫]': '🐼',
  '[兔子]': '🐰',
  '[小鸡]': '🐥',
  '[小狗]': '🐶',
  '[小猫]': '🐱',
  '[羊]': '🐑',
  '[神兽]': '🦙', // 草泥马
  '[鸡]': '🐔',
  '[鸭]': '🦆',
  '[青蛙]': '🐸',
  
  // 多多系列（特殊）
  '[多多开心]': '😊✨',
  '[多多可爱]': '🥰💕',
  '[多多得意]': '😏🎵',
  '[多多大哭]': '😭💧',
  '[多多难过]': '😔💔',
  '[多多生病]': '😷💊',
  '[多多困]': '😴💤',
  '[多多惊讶]': '😯⚡',
  '[多多吃饭]': '😋🍚',
  '[多多睡觉]': '😴🛏️',
  '[多多音乐]': '🎵🎧',
  '[多多爱心]': '❤️💕',
  '[多多拥抱]': '🤗💙',
  '[多多加油]': '💪⚡',

  // 其他
  '[笑]': '😄',
  '[哭]': '😭',
  '[哈哈]': '😂',
  '[呵呵]': '😊',
  '[嘿嘿]': '😏',
  '[嗯]': '🤔',
  '[嗯嗯]': '😌',
  '[哦]': '😯',
  '[唉]': '😔',
  '[嘘]': '🤫',
  '[吐]': '🤮',
  '[流鼻涕]': '🤧',
  '[无奈]': '😤',
  '[咳]': '😷',
  '[嘿]': '😄',
  '[撒花]': '🎉',
  '[流感]': '🤧🤒',
  '[感冒]': '🤧',
  '[发烧]': '🤒',
  '[啊]': '😮',
  '[咦]': '🤨',
  '[摸头]': '😅',
  '[秀恩爱]': '💕'
};

/**
 * 将评论文本中的表情文字转换为emoji
 * @param {string} text - 包含表情文字的文本
 * @returns {string} 转换后的文本
 */
export function parseEmoji(text) {
  if (!text || typeof text !== 'string') {
    return text;
  }

  let parsedText = text;
  
  // 使用正则表达式匹配所有的[表情]格式
  const emojiRegex = /\[([^\[\]]+)\]/g;
  
  parsedText = parsedText.replace(emojiRegex, (match, emojiName) => {
    const fullMatch = `[${emojiName}]`;
    
    // 查找对应的emoji
    if (ALL_EMOJI_MAP[fullMatch]) {
      return ALL_EMOJI_MAP[fullMatch];
    }
    
    // 如果没找到对应的emoji，保留原文
    return match;
  });
  
  return parsedText;
}

/**
 * 检查文本是否包含表情
 * @param {string} text - 要检查的文本
 * @returns {boolean} 是否包含表情
 */
export function hasEmoji(text) {
  if (!text || typeof text !== 'string') {
    return false;
  }
  
  const emojiRegex = /\[([^\[\]]+)\]/;
  return emojiRegex.test(text);
}

/**
 * 获取文本中所有的表情
 * @param {string} text - 要分析的文本
 * @returns {Array} 表情数组
 */
export function extractEmojis(text) {
  if (!text || typeof text !== 'string') {
    return [];
  }
  
  const emojiRegex = /\[([^\[\]]+)\]/g;
  const matches = text.match(emojiRegex) || [];
  
  return matches.filter(match => ALL_EMOJI_MAP[match]);
}

/**
 * 将文本分割为文字和表情的混合数组
 * @param {string} text - 要分析的文本
 * @returns {Array} 包含{type: 'text'|'emoji', content: string}的数组
 */
export function parseTextWithEmoji(text) {
  if (!text || typeof text !== 'string') {
    return [{ type: 'text', content: text || '' }];
  }

  const result = [];
  const emojiRegex = /\[([^\[\]]+)\]/g;
  let lastIndex = 0;
  let match;

  while ((match = emojiRegex.exec(text)) !== null) {
    const fullMatch = match[0]; // [表情]
    const startIndex = match.index;
    
    // 添加表情前的文字
    if (startIndex > lastIndex) {
      const textBefore = text.substring(lastIndex, startIndex);
      if (textBefore) {
        result.push({ type: 'text', content: textBefore });
      }
    }
    
    // 添加表情
    if (ALL_EMOJI_MAP[fullMatch]) {
      result.push({ 
        type: 'emoji', 
        content: ALL_EMOJI_MAP[fullMatch],
        original: fullMatch 
      });
    } else {
      // 如果不是识别的表情，当作普通文字处理
      result.push({ type: 'text', content: fullMatch });
    }
    
    lastIndex = startIndex + fullMatch.length;
  }
  
  // 添加最后剩余的文字
  if (lastIndex < text.length) {
    const remainingText = text.substring(lastIndex);
    if (remainingText) {
      result.push({ type: 'text', content: remainingText });
    }
  }
  
  return result.length > 0 ? result : [{ type: 'text', content: text }];
}