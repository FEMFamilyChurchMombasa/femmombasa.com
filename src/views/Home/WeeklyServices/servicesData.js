function Service(ref, serviceName, serviceTimes, description, imageSrc) {
    this.ref = ref;
    this.serviceName = serviceName;
    this.serviceTimes = serviceTimes;
    this.description = description;
    this.imageSrc = imageSrc;
}

function ServiceTimes(weekday, from, to) {
    this.weekday = weekday;
    this.from = from;
    this.to = to;
}

export let worshipService = new Service(
    "worshipService",
    "Worship Service",
    new ServiceTimes("Sunday", "9:30 AM", "Noon"),
    "Our worship service happens every Sunday morning at our physical location. The service begins with 30 minutes of corporate and individual prayer culminating in a powerful session of praise and worship led by our music team. After the music, our kids head to the children's church while the speaker delivers a moving sermon. The service then ends at around noon. All our Sunday worship services are broadcast on Facebook for you to follow along at home or while traveling.",
    "/src/assets/worship service.webp"
);

export let zoomPrayerService = new Service(
    "zoomPrayerService",
    "Zoom Prayer Service",
    new ServiceTimes("Tuesday", "7:45 PM", "9:00 PM"),
    "Thanks to modern technology, Christ-followers can now worship together even when far apart. Every Tuesday evening, we meet on Zoom to pray for fellow believers, our country Kenya, other nations, and more, then listen to an uplifting message. Whether you are in a matatu getting home from work or cooking dinner for your family, you can join us for prayer.",
    "/src/assets/zoom.webp"
);

export let takeOffService = new Service(
    "takeOffService",
    "Take-Off Lunch Hour Service",
    new ServiceTimes("Wednesday", "12:45 PM", "2:00 PM"),
    "We believe that it is necessary to equip believers in the marketplce. In the Take-Off Lunch Hour service, you can learn everything from Biblical financial principles to the best way to work with business partners to how taxes work. Connect with other believers in the marketplace every Wednesday afternoon at our physical location.",
    "/src/assets/take off lunch hour service.webp"
);

export let openHeavensService = new Service(
    "openHeavensService",
    "Open Heavens Prayer Service",
    new ServiceTimes("Friday", "5:30 PM", "7:00 PM"),
    "Every Christ-follower needs uninterrupted time to seek God through prayer. On Friday evening, you can come and intercede for yourself and your family. After 30 minutes of individual prayer, the congregation joins together to pray for the nation and the body of Christ.",
    "/src/assets/open heaves prayer service.webp"
)