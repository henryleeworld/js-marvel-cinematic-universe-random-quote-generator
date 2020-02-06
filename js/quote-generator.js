$(document).ready(function() {
    var originQuote = [{
            quote: "有時在會走之前你就得跑。",
            person: "東尼·史塔克"
        }, {
            quote: "再多的錢也換不回時間。",
            person: "東尼·史塔克"
        }, {
            quote: "我就是鋼鐵人。",
            person: "東尼·史塔克"
        }, {
            quote: "終點也是旅程的一部份。",
            person: "東尼·史塔克"
        }, {
            quote: "我可以和你耗上一整天。",
            person: "史蒂芬·羅傑斯"
        }, {
            quote: "我一直和所有人說要往前看，有些人做到了，但我們不行。",
            person: "史蒂芬·羅傑斯"
        }, {
            quote: "我會陪著你到最後。",
            person: "巴奇·巴恩斯"
        }, {
            quote: "我只感覺到你。",
            person: "幻視"
        }, {
            quote: "放開我吧，沒關係。",
            person: "娜塔莎·羅曼諾夫"
        }, {
            quote: "我不以人的錯誤去評斷人。",
            person: "娜塔莎·羅曼諾夫"
        }, {
            quote: "對不起我沒能早點給你帶來希望。",
            person: "娜塔莎·羅曼諾夫"
        }, {
            quote: "我仍然有資格。",
            person: "索爾"
        }, {
            quote: "不要給我希望。",
            person: "克林特·巴頓"
        }, {
            quote: "我們會好好的，你可以休息了。",
            person: "小辣椒"
        }

    ];

    $("#button").click(function(evt) {
        var quote = $("#space #quote").text();
        var person = $("#space #person").text();
        evt.preventDefault();
        var originLength = originQuote.length;
        var randomNumber = Math.floor(Math.random() * originLength);
        for (var i = 0; i < originLength; i += 1) {
            var newQuote = originQuote[randomNumber].quote;
            var newPerson = originQuote[randomNumber].person;
            var animateTime = 500;
            var space = $("#space");
            space.fadeOut(animateTime, function() {
                space.html("");
                space.append('<h5 id="quote">' + newQuote + '</h5>' + '<h5 id="person">' + '- ' + newPerson + '</h5>');
                space.fadeIn(animateTime);
            });
            break;
        }
    });
    
    $("#button").click();
});