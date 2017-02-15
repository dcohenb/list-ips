function list(range) {
    var res = range.split('.').map(function(section) {
        if (!isNaN(section)) {
            return [parseInt(section)];
        } else if (section.indexOf('-') !== -1) {
            var r = section.split('-');
            var n = parseInt(r[0]);
            var m = parseInt(r[1]);
            if (n > m) {
                n = parseInt(r[1]);
                m = parseInt(r[0]);
            }
            var a = [];
            for (var i = n; i <= m; i++) {
                a.push(i);
            }
            return a;
        } else if (section === "*") {
            return Array.apply(null, {
                length: 255
            }).map(Number.call, Number);
        }
    });

    var list = [];
    if(res.length < 4 || res.length > 4) {
        console.error('ip format not right, should be x.x.x.x')
        return [];
    }
    res[0].forEach(function(a) {
        res[1].forEach(function(b) {
            res[2].forEach(function(c) {
                res[3].forEach(function(d) {
                    list.push([a, b, c, d].join('.'))
                });
            });
        });
    });
    
    return list;
}

module.exports.list = list;
