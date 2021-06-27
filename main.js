function onSocialClick() {
    $(".social-link-container").removeClass("hidden");
    $(".link-container").addClass("hidden");
    $(".news-link-container").addClass("hidden");
    $(".media-link-container").addClass("hidden");
}

function onNewsClick() {
    $(".social-link-container").addClass("hidden");
    $(".link-container").addClass("hidden");
    $(".news-link-container").removeClass("hidden");
    $(".media-link-container").addClass("hidden");
}

function onCloseClick() {
    $(".social-link-container").addClass("hidden");
    $(".link-container").removeClass("hidden");
    $(".news-link-container").addClass("hidden");
    $(".media-link-container").addClass("hidden");
}

function onMediaClick() {
    $(".social-link-container").addClass("hidden");
    $(".link-container").addClass("hidden");
    $(".news-link-container").addClass("hidden");
    $(".media-link-container").removeClass("hidden");
}