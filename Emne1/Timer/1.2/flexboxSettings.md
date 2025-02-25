### Liste over viktige innstillinger i en flexbox-layout

1: **display**: flex: Dette aktiverer flexbox på et container-element og gjør at dets barn blir flex-items. 
   Det er utgangspunktet for en flexbox-layout.

2: **flex-direction**: Bestemmer hovedaksen for flexbox, som kan være row (standard, horisontalt) eller 
   column (vertikalt).

3: **justify-content**: Kontrollerer plasseringen av flex-items langs hovedaksen. Viktige verdier inkluderer 
   flex-start, center, space-between, space-around, og space-evenly.

4: **align-items**: Bestemmer hvordan flex-items plasseres langs den kryssende aksen (på tvers av hovedaksen). 
   Vanlige verdier er stretch, flex-start, center, og flex-end.

5: **flex-wrap**: Tillater flex-items å brytes til en ny linje hvis de ikke får plass på en enkelt linje. 
   Valgene er nowrap (standard), wrap, og wrap-reverse.

6: **align-content**: Brukes når innholdet brytes til flere linjer (med flex-wrap) og styrer hvordan linjene plasseres 
   i forhold til hverandre. Dette er nyttig for flerlinjers layout.

7: **flex-grow**, **flex-shrink**, og **flex-basis**: Individuelle kontroller for hvert flex-item som bestemmer hvor mye det 
   skal vokse (flex-grow), krympe (flex-shrink), eller ha som basisstørrelse (flex-basis).

https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://bennettfeely.com/flexplorer/