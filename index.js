$(() => {
    $('#topControl').click(() => {
        $("html, body").scrollTop(0);
        return false;
    })
    console.log("Hello Boss!")
})