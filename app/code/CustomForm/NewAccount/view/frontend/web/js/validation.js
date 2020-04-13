requirejs([
    'jquery',
    'jquery/ui',
    'jquery/validate',
    'mage/translate'
], function ($) {
    'use strict';
    const AGE = 21;
    $.validator.addMethod(
        "validate-age",
        function (value, element) {
            let dob = value.split('/');
            let birth_day = dob[1];
            let birth_manth = dob[0];
            let birth_year = dob[2];

            let today_date = new Date();
            let today_year = today_date.getFullYear();
            let today_month = today_date.getMonth();
            let today_day = today_date.getDate();

            if (today_year - birth_year < AGE) {
                return false;
            }

            if ((today_year - birth_year) === AGE && today_month < birth_manth - 1) {
                return false;
            }

            if ((today_year - birth_year) === AGE && today_month === birth_manth - 1 && today_day < birth_day) {
                return false;
            }

            return true;
        },
        $.mage.__("Only users over " + AGE + " can register")
    );
});
