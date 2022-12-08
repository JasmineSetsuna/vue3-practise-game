// 方块类型
const sports = [
    "⚽",
    "⚾",
    "🥎",
    "🏀",
    "🏐",
    "🏈",
    "🏉",
    "🎾",
    "🥏",
    "🎳",
    "🏏",
    "🏑",
    "🏒",
    "🥍",
    "🏓",
    "🏸",
    "🥊",
    "🥋",
    "🥅",
    "⛳",
    "⛸"
];

//简单难度
export const easyGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 运动类别数
    typeNum: 8,
    // 每层块数（大致）
    levelBlockNum: 10,
    // 边界收缩步长
    borderStep: 1,
    // 总层数（最小为 2）
    levelNum: 6,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [4, 4],
    // 运动数组
    sports,
};

//中等难度
export const middleGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 运动类别数
    typeNum: 10,
    // 每层块数（大致）
    levelBlockNum: 12,
    // 边界收缩步长
    borderStep: 1,
    // 总层数（最小为 2）
    levelNum: 7,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [5, 5],
    // 运动数组
    sports,
};

//困难难度
export const hardGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 运动类别数
    typeNum: 12,
    // 每层块数（大致）
    levelBlockNum: 16,
    // 边界收缩步长
    borderStep: 1,
    // 总层数（最小为 2）
    levelNum: 8,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [6, 6],
    // 运动数组
    sports,
};

//地狱难度
export const lunaticGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 运动类别数
    typeNum: 14,
    // 每层块数（大致）
    levelBlockNum: 20,
    // 边界收缩步长
    borderStep: 2,
    // 总层数（最小为 2）
    levelNum: 10,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [8, 8],
    // 运动数组
    sports,
};

//极致难度
export const ultimateGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 运动类别数
    typeNum: 16,
    // 每层块数（大致）
    levelBlockNum: 24,
    // 边界收缩步长
    borderStep: 2,
    // 总层数（最小为 2）
    levelNum: 12,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [8, 8],
    // 运动数组
    sports,
};

//羊了个羊难度
export const yangGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 运动类别数
    typeNum: 18,
    // 每层块数（大致）
    levelBlockNum: 28,
    // 边界收缩步长
    borderStep: 3,
    // 总层数（最小为 2）
    levelNum: 15,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [8, 8],
    // 运动数组
    sports,
};

//自定义难度
export const defaultGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 运动类别数
    typeNum: 12,
    // 每层块数（大致）
    levelBlockNum: 24,
    // 边界收缩步长
    borderStep: 1,
    // 总层数（最小为 2）
    levelNum: 6,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [8, 8],
    // 运动数组
    sports,
};