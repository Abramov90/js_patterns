function Flyweight (firstProp, secondProp, thirdProp) {
    this.firstProp = firstProp;
    this.secondProp = secondProp;
    this.thirdProp = thirdProp;
};

var FlyWeightFactory = (function () {
    var flyweights = {};

    return {

        get: function (firstProp, secondProp, thirdProp) {
            if (!flyweights[firstProp + secondProp]) {
                flyweights[firstProp + secondProp] =
                    new Flyweight(firstProp, secondProp, thirdProp);
            }
            return flyweights[firstProp + secondProp];
        },

        getCount: function () {
            var count = 0;
            for (var f in flyweights) count++;
            return count;
        }
    }
})();

function SubjectCollection () {
    var subjects = {};
    var count = 0;

    return {
        add: function (firstProp, secondProp, thirdProp, fourthProp, fifthProp) {
            subjects[fifthProp] =
                new Computer(firstProp, secondProp, thirdProp, fourthProp, fifthProp);
            count++;
        },

        get: function (tag) {
            return subjects[fifthProp];
        },

        getCount: function () {
            return count;
        }
    };
}

var Computer = function (firstProp, secondProp, thirdProp, fourthProp, fifthProp) {
    this.flyweight = FlyWeightFactory.get(firstProp, secondProp, thirdProp);
    this.fourthProp = fourthProp;
    this.fifthProp = fifthProp;
    this.getFirstProp = function () {
        return this.flyweight.firstProp;
    }
}
