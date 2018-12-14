import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    @font-face {font-family: "iconfont";
    src: url('./statics/iconfont/iconfont.eot?t=1544787926520'); /* IE9*/
    src: url('./statics/iconfont/iconfont.eot?t=1544787926520#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAWcAAsAAAAACBwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8gUpEY21hcAAAAYAAAABqAAABstK4nbZnbHlmAAAB7AAAAZsAAAG8AUYu6GhlYWQAAAOIAAAAMQAAADYTkbWqaGhlYQAAA7wAAAAgAAAAJAfdA4ZobXR4AAAD3AAAABIAAAAUFAD//2xvY2EAAAPwAAAADAAAAAwAygFMbWF4cAAAA/wAAAAfAAAAIAETADxuYW1lAAAEHAAAAUUAAAJtPlT+fXBvc3QAAAVkAAAANQAAAEa7bV5keJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByecb8IZG7438AQw9zI0AAUZgTJAQDkQgxCeJztkbsNgDAMRF8+IASMkBGoqVkhe1AxtMUWwY4pGIKzXnQ+OY0NDEBSNiVDuAiYTk1DzxNzzzOH9jMTkSiLFNnv2hp8/augc17mk/6NakZ+rf093i7b9hzbthTHLiK7YzN3dYgPceUX0wAAeJw1kE9LG2EQxmd23jdLa5sETLLZNkqT7e4aKJuQP5siVDegUKheS4mioaCHeDQXb1t68ROk0IsgyTeoBwXjeijmVCT0kLqn3vohNlnfpMrAM/PMwPyGAQIIf9MPegNzoMBLAN1CcwVri6hEkaIoi0JYC9GsKXjb9Rnzu72p9joDokHn2w1jN2j7KV+fTu44v+t1fekvG3Q6AzbT4NeFeg4AkmC5JALikAWY7k4KQlVWqgJRMQozm0gpAjftJKWgYRXp7Nh1+2O+FszU+d+SLhtWu358Ro7rOnzc3zr9+pCdxwFQGIYuA/oCT+C5YAKaRi6GSs2uoIIm6ib921TratNrpoPvnvTUG29juU+ZjXR612uq9fGfK4l5wclRH5i4PSRPvEuGGLyGAkBWM7OyhuV5MkwtIhO3y6UF1KpaRMsZ1coqVrScLL6YTKTKJfsdSt7++8lofQ9jn9cOeETicgtHxZXDt5itW7XWjrNc2F1aePVCLw6HBJM8rsYNbX5yzTPtnwW7mP8YffZB/8QzajJT0hcB7gGGTHgEAHicY2BkYGAA4laNuB/x/DZfGbhZGEDghuWOazD6////DSwMzI1ALgcDE0gUAFysDQEAAAB4nGNgZGBgbvjfwBDDwvD/PwMDCwMDUAQFsAIAddwEbHicY2FgYGCB4///QTQAC/kCEwAAAAAAAAA2AG4AlADeeJxjYGRgYGBlMGBgYQABJiDmAkIGhv9gPgMADd0BUAB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICVkYmRmZGFkZWRjYErLTEvPSUxKzMvnaW4IDOPuSA1j8kxkYEBAHWlB+YAAAA=') format('woff'),
    url('./statics/iconfont/iconfont.ttf?t=1544787926520') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./statics/iconfont/iconfont.svg?t=1544787926520#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

`





