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
      src: url('./statics/iconfont/iconfont.eot?t=1544071432863'); /* IE9*/
      src: url('./statics/iconfont/iconfont.eot?t=1544071432863#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAUwAAsAAAAAB4gAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8gUgpY21hcAAAAYAAAABeAAABnLOeGz9nbHlmAAAB4AAAAUgAAAFMKDZ9IGhlYWQAAAMoAAAAMQAAADYTe9gOaGhlYQAAA1wAAAAgAAAAJAfdA4VobXR4AAADfAAAABAAAAAQEAD//2xvY2EAAAOMAAAACgAAAAoA3ABcbWF4cAAAA5gAAAAeAAAAIAESADxuYW1lAAADuAAAAUUAAAJtPlT+fXBvc3QAAAUAAAAALgAAAD8Br+CReJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByecT8zY27438AQw9zI0AAUZgTJAQDiGQwleJztkMENgDAIRR9STaOO0BE8mg7kycm7RgXqwSH85BH4IRw+MANqHEYCuRFcl7kSvrKGn6i2Z6sJ2tZKq71/p5DERY5p8s+y8GuPfr6bemoDz7iVQeRaB+gDPQcSngAAeJwdjz1PwlAYhd+3914av4AEoVQLEa5tJTFAKLTGRJBEExN1NQ5GiIkOOOripn+iJi4u8A9cdMA6GDoZQxyQTm7+CKAWlyfn5CzPAQLgf5Ensg5zIMEygJpHvYpWGqUwkjCKQQhqHlG3JPxse5R67c6UHdslxLXve5T20PQSnjpdhowNO21P+KGubbv0n6OPF/kZAIjv+7cUyB3MwAJEAVDXshGULLOMEuqo6uT3UK7LTaeZHD04wqwzPkGjS5SDZLLhNOX6+PtVoM7o8aYLNPD2iRPoixCBVSgAZLieETkaMaLpPCQSZhqlFPIKD/GsVinXsMyzYvAqvpgwSuYWCs7F3mSwe46Rs51LFhKY2MJBsXq1gZl63mqdbm8WGmuplSW12O8TmOSwFtV4bPLGlOv3glnMHYXn99VjpshxpaSmAf4AYFtXuHicY2BkYGAA4o+MHffj+W2+MnCzMIDADb1THDD6////DSwMzI1ALgcDE0gUAEh0C8kAAAB4nGNgZGBgbvjfwBDDwvD/PwMDCwMDUAQFsAAAddsEawQAAAAEAAAABAD//wQAAAAAAAAAADYAXACmAAB4nGNgZGBgYGEwAGIQYAJiLiBkYPgP5jMAAA3CAU8AAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgIWRiZGZkYWRlYErLTEvPSUxKzMvnbkgNY/JMZGBAQBLUAYgAAA=') format('woff'),
      url('./statics/iconfont/iconfont.ttf?t=1544071432863') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      url('./statics/iconfont/iconfont.svg?t=1544071432863#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
      font-family:"iconfont" !important;
      font-size:16px;
      font-style:normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

`


