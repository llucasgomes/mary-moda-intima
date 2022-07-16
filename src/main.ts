import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



  export let imgProdutos = [{
    img: "https://lirp.cdn-website.com/004ec23b/dms3rep/multi/opt/b5-640w.png" //1 imagem
}, {
    img: "https://lirp.cdn-website.com/004ec23b/dms3rep/multi/opt/b6-640w.png" //2 imagem
},{
    img: "https://lirp.cdn-website.com/004ec23b/dms3rep/multi/opt/b3-640w.png" //3 imagem
},{
    img: "https://lirp.cdn-website.com/004ec23b/dms3rep/multi/opt/b2-640w.png" //4 imagem
},{
    img: "https://lirp.cdn-website.com/004ec23b/dms3rep/multi/opt/b1-640w.png" //5 imagem
},{
    img: "https://lirp.cdn-website.com/004ec23b/dms3rep/multi/opt/b4-640w.png" //6 imagem
}
]


export let imgComentarios=[
    {
        img: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo.jpg" //1 imagem
    },{
        img: "https://www.pdt.org.br/wp-content/uploads/2021/01/Ana-Moro-assume-a-presid%C3%AAncia-da-A%C3%A7%C3%A3o-da-Mulher-Trabalhista-no-Paran%C3%A1.jpeg" //2 imagem
    },{
        img: "https://midias.correiobraziliense.com.br/_midias/jpg/2021/03/05/675x450/1_cbpfot020320212188-6556336.jpg" //6 imagem
    }
]
