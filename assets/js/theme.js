"use strict"; const d = document; d.addEventListener("DOMContentLoaded", function (c) { var a = d.querySelector(".loading-preloader"); a && setTimeout(function () { a.classList.add("d-none") }, 400), d.querySelector(".headroom") && new Headroom(document.querySelector(".main-header"), { offset: 0, offset: { up: 100, down: 50 }, tolerance: { up: 0, down: 0 } }).init(), [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (a) { return new bootstrap.Tooltip(a) }), [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function (a) { return new bootstrap.Popover(a) }); var e = { breakpointsInverse: !0, observer: !0 }, b = document.querySelectorAll(".swiper-container");[].forEach.call(b, function (a, f, g) { var b = a.getAttribute("data-swiper-options") || {}; if (b) var c = JSON.parse(b); a.options = Object.assign({}, e, c); var h = new Swiper(a, a.options); console.log(a.options.autoplay), void 0 !== a.options.autoplay && !1 !== a.options.autoplay && (a.addEventListener("mouseenter", function (a) { h.autoplay.stop(), console.log("stop") }), a.addEventListener("mouseleave", function (a) { h.autoplay.start(), console.log("start") })) }) })