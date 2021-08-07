'use strict';

$(document).ready(function(){
    console.log('here interface');

    if(window.location.href.indexOf('index') > -1){
         //SLIDER PLUGGIN
        $(function(){
            $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1000
            });
        });
    }

    //accordion
    if(window.location.href.indexOf('aboutme') > -1){
        $('#acordeon').accordion();
    }

    //reloj
    if(window.location.href.indexOf('tutorials') > -1){
        setInterval(() => {
            let reloj = moment().format('hh:mm:ss');
            $('#reloj').html(reloj);
        }, 1000);
    }

    //Form Validation

    if(window.location.href.indexOf('contact') > -1){
        $.validate({
            lang: 'es'
        });
    }

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    //POSTS
    let posts = [
        {
            title: `I'M A BEGINNER, WHICH TYPE OF JUMP ROPE IS BEST FOR ME?`,
            date: `Date: ${moment(randomDate(new Date(2021, 0, 1), new Date())).format('MMM DD YYYY')}`,
            content: `Our ropes are made for all levels and abilities. If your goal is to lose weight and increase your heart rate, use the Legacy heavy rope. If you're into freestyle training and would like to enhance your speed and agility, the Money rope will be the best rope for you.`
        },
        {
            title: 'WHAT CLOTHING SIZE SHOULD I PURCHASE?',
            date: `Date: ${moment(randomDate(new Date(2021, 0, 1), new Date())).format('MMM DD YYYY')}`,
            content: `Clothing comes in a variety of fits and sizes. Please view our photos and see the sizing details within each product. We also have a helpful size guide. Click here to view.`
        },
        {
            title: 'RASH ATHLETICS: CAN I USE THESE ROPES ON HARD FLOORING SUCH AS CONCRETE?',
            date: `Date: ${moment(randomDate(new Date(2021, 0, 1), new Date())).format('MMM DD YYYY')}`,
            content: `We do not recommend using our speed ropes on hard flooring. This will undoubtedly lead to snapping and deteriorate your rope quicker. Please stay off concrete, tiled / hard-wood floors, rough surfaces etc, where possible to extend the life of your rope. We advise using one of our mats.`
        },
        {
            title: 'WHICH JUMP ROPE LENGTH IS BEST FOR ME, 10FT OR 11FT?',
            date: `Date: ${moment(randomDate(new Date(2021, 0, 1), new Date())).format('MMM DD YYYY')}`,
            content: `For reference, Rush is 6'1'' (186cm) and uses a 10ft rope with a few knots so we would recommend using the same length if you are the same height or less. For anyone taller, you could go for the 11ft and size down if need be.`
        }
    ];

    console.log(posts);

    posts.forEach((item, index) =>{
        let post = 
        `   
        <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
                ${item.content}
            </p>
            <a href="#" class="btn-more">read more...</a>
        </article>
        <hr>
        `;

        $('#posts').append(post);
    });

    //Select theme
    let theme = $('#theme');

    $('#dark-theme').on('click', function () {
        theme.attr("href", "css/dark.css");
    });

    $('#light-theme').on('click', function () {
        theme.attr("href", "css/light.css");
    });

    //scroll hacia arriba
    $('.go-up').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //login
    $('#login form').submit(function (e) { 
        e.preventDefault();
        let name = $('#form_name').val();
        console.log(name);
        localStorage.setItem('form_name', name);
        location.reload();
    });

    let form_name = localStorage.getItem('form_name');
    if(form_name != null&& form_name != 'undefined'){
        $('#login h4').text(`Welcome ${form_name}`);
        $('#login').append('<br><a href="#" id="logout">Logout</a>')
        $('#login form').hide();

        $('#login h4').addClass("welcome");
          
        $('#logout').on('click', function () {
            localStorage.clear();   
            location.reload();
        });
    }

});