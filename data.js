const users = [
    { userName: '王向玉', message: '愿你的生活常温暖，日子总是温柔又闪光', },
    { userName: '冯晓昆', message: '每个人都是独一无二的，不必为了任何人否定自己，我们都是最棒的', },
    { userName: '麻希凤', message: '朝着一个目标不停地向前，不断努力的付出，哪怕你现在的人生是从零开始，你都可以做得到。让梦想照进现实，才是当下最应该做的事情!', },
    { userName: '徐慧慧', message: '给自己一个目标，给自己一个希望，给自己一份爱、一份温暖，只为今天快乐，不为昨天烦恼', },
    { userName: '闫旭琳', message: '你今天的努力，是幸运的伏笔，当下的付出，是明日的花开。 让我们怀揣希望去努力，静待美好的出现', },
    { userName: '杨玉翠', message: '未来，你只需要比一个人更好，那个人就是现在的自己。', },
    { userName: '王圣楠', message: '你的心有多大，你就能走多远。只要坚持跑下去，你就会跑出自己意想不到的距离。', },
    { userName: '赵鑫', message: '别否定自己，你特别好，特别温柔，特别值得。', },
    { userName: '李莲', message: '用尽全力，去做你想做的事，去爱你想爱的人，去成为你想成为的自己。', },
    { userName: '陈晴', message: '未来，你只需要比一个人更好，那个人就是现在的自己。', },
    { userName: '扈世宇', message: '给自己一个目标，给自己一个希望，给自己一份爱、一份温暖，只为今天快乐，不为昨天烦恼', },
    { userName: '高盟', message: '你今天的努力，是幸运的伏笔，当下的付出，是明日的花开。让我们怀揣希望去努力，静待美好的出现。', },
    { userName: '余志强', message: '有匪君子，如切如磋，如琢如磨', },
    { userName: '陈宇', message: '可以不光芒万丈，但不能停止自己发光。', },
    { userName: '谷俊红', message: '奋斗的年纪，请放下你的清高，收起你的自尊，褪去你的愚昧，穿上你的现实，冲出你的花季，去走出你的人生。', },
    { userName: '岳杨静仔', message: '带上自己的心去上路，目标在远方，路在自己的脚下。每迈出一步，都有一点点收获。', },
    { userName: '赵亚参', message: '投我以桃，报之以李', },
    { userName: '李新彤', message: '靡不有初,鲜克有终', },
    { userName: '宋妹静', message: '皎皎白驹，在彼空谷， 生刍一束，其人如玉', },
    { userName: '蒋侠敏', message: '可以不光芒万丈，但不能停止自己发光。', },
    { userName: '郭梦微', message: '看淡一点、再努力一点，无论生活怎样，都不要忘记微笑，愿你成为自己的太阳，无需凭借谁的光。', },
    { userName: '薄磊', message: '可以不光芒万丈，但不能停止自己发光。', },
    { userName: '孟小茜', message: '投我以桃，报之以李', },
    { userName: '靳素梅', message: '可以不光芒万丈，但不能停止自己发光。', },
    { userName: '聂静', message: '人生难免经受挫折，风雨过后就是彩虹;生活难免遭受苦难，雨过天晴终有阳光。', },
    { userName: '王文娟', message: '不是每个人都能成为自己想要的样子，但每个人，都可以努力成为自己想要的样子。相信自己，你能作茧自缚，就能破茧成蝶。', },
    { userName: '张孟瑶', message: '愿你的生活常温暖，日子总是温柔又闪光', },
    { userName: '霍彤', message: '可以不光芒万丈，但不能停止自己发光', },
    { userName: '曹园园', message: '巧笑倩兮，美目盼兮', },
    { userName: '张爽', message: '看淡一点、再努力一点，无论生活怎样，都不要忘记微笑，愿你成为自己的太阳，无需凭借谁的光。', },
    { userName: '刘晓娜', message: '每个人都是独一无二的，不必为了任何人否定自己，我们都是最棒的~', },
    { userName: '邱春慧', message: '你的心有多大，你就能走多远。只要坚持跑下去，你就会跑出自己意想不到的距离。', },
    { userName: '朱瑞芳', message: '在疲惫的生活中，总要有些温暖的梦想', },
    { userName: '高维兰', message: '未来，你只需要比一个人更好，那个人就是现在的自己', },
    { userName: '胡雅婷', message: '你今天的努力，是幸运的伏笔，当下的付出，是明日的花开。让我们怀揣希望去努力，静待美好的出现', },
];

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFloatFromInterval(min, max) {
    return +(Math.random() * (max - min + 1) + min).toFixed(2);
}

function renderTableHtml(columns = [], data = []) {
    return [
        '<table>',
        '<colgroup>',
        columns.map((v, i) => {
            const { width = '' } = v;
            return `<col style="width: ${width}" />`;
        }).join(''),
        '</colgroup>',
        '<thead>',
        '<tr>',
        columns.map((v, i) => {
            const { label, align = 'left' } = v;
            return [
                `<th style="text-align: ${align}">`,
                label,
                '</th>'
            ].join('');
        }).join(''),
        '</tr>',
        '</thead>',
        '<tbody>',
        data.map((v, i) => {
            return [
                '<tr>',
                columns.map((v2, i2) => {
                    const { prop, align = 'left' } = v2;
                    return [
                        `<td style="text-align: ${align}">`,
                        v[prop],
                        '</td>'
                    ].join('');
                }).join(''),
                '</tr>',
            ].join('')
        }).join(''),
        '</tbody>',
        '</table>',
    ].join('');
};
