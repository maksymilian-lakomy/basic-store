import { Component, OnInit } from '@angular/core';
import { StoreItem } from '../../../models/StoreItem'

@Component({
    selector: 'app-store-display',
    templateUrl: './store-display.component.html',
    styleUrls: ['./store-display.component.sass']
})
export class StoreDisplayComponent implements OnInit {
    storeItems: StoreItem[];

    constructor() { }

    ngOnInit() {
        this.storeItems = [
            new StoreItem(1, 'Blue Baby Bottle SL', `Mikrofon Baby Bottle SL to kardioidalny
                            mikrofon pojemnościowy o klasycznym brzmieniu i niesamowitej wszechstronności.
                            Z bogatą prezencją średnicy, łagodną górą pasma oraz neutralnym dołem,
                            Baby Bottle SL jest reminiscencją najlepszych vintageowych mikrofonów świata.`, 375),
            new StoreItem(2, 'Focusrite Scarlett 18i8 3rd Gen', `Scarlett 18i8 trzeciej generacji to doskonały
                            interfejs audio dla inżynierów i producentów nagrań, potrzebujących stworzyć sobie
                            warunki do wielośladowego nagrywania, gdziekolwiek się znajdą.`, 395),
            new StoreItem(3, 'Rode PSA-1', `Rode PSA1 Studio Arm to statyw mikrofonowy typu radiowego, dzięki
                            któremu zyskasz szerokie możliwości modyfikacji ustawienia mikrofonu.`, 77)
        ];
    }

}
