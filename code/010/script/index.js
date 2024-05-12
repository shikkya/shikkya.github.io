/**
 * index.html
 * @authors shikkya
 * @date    2019-10-25
 * @version $Id$
 */

$(function () {
    $('#myDatepicker').dcalendarpicker();

    $('#myDatepicker_ch').dcalendarpicker({
        format: 'yyyy-mm-dd',
        language: 'ch'
    });

    $('#myDatepicker_date').dcalendarpicker({
        format: 'yyyy-mm-dd',
        language: 'ch'
    });
})