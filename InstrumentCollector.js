class InstrumentCollector
{
   CreateInstruments()
    {
        let harp = new Harp("harp", 8, 160);
        let guitar = new Guitar("guitar", 4, "Wood");
        let saxophone = new Saxophone("sax", "Iron");
        let flute = new Flute("flute", 4, "Wood");
        let instruments = [harp, guitar, saxophone, flute];

        function getInstruments()
        {

            return instruments;
        }
getInstruments();

    }


}