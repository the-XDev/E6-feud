export class Blacklist{
    private static blacklist=[
        "gore",
        "scat",
        "watersports",
        "young",
        "loli",
        "shota",
        "rape",
        "inflation",
        "vore",
        "what",
        "wtf",
        "what_has_science_done",
        "where_is_your_god_now",
        "cock_and_ball_torture",
        "underage",
        "sounding",
        "hyper",
        "diaper",
        "abdl",
        "epilepsy_warning",
        "nightmare_fuel",
        "obese",
        "necrophilia",
        "bad_parenting",
        "urethral",
        "hard_vore",
        "fatal_vore",
        "wetting",
        "feral",
        "fart_fetish",
        "birth",
        "parent_and_child",
      ];

    static getStr():string{
        return "-"+this.blacklist.join(" -");
    }
}