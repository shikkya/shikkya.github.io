/**
 * index.html
 * @authors shikkya
 * @date    2019-10-25
 * @version $Id$
 */

$(function() {
    $('#myDatepicker').dcalendarpicker();

    $('#myDatepickerFormat').dcalendarpicker({
        format: 'yyyy-mm-dd'
    });
})