


module.exports = function (data) {

    return{
        /*
         * Simple getter
         */
        get: function (key, defaultValue) {
            return typeof data[key] == 'undefined' ? (defaultValue || '') : data[key];
        },
        /*
         * 
         */
        getStars: function () {
            return Number(this.get('stargazers_count'));
        }
    }
}

