$(function () {

    let filter = $("[data-filter]");


    filter.on("click", function (event) {
        event.preventDefault();
        
        let cat = $(this).data('filter');
        
        filter.each(function () {
            let title = $(this).data('filter');

           if(title === cat) {
               $(this).addClass('active');
           } else {
                $(this).removeClass('active');
            }
        });
    

        if (cat == 'all') {
            $("[data-cat]").removeClass('hide');
        } else {
            $("[data-cat]").each(function () {
                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            })
        }
    });
});
