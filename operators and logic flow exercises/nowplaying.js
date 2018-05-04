function nowPlaying(args) {

    let group = args[0];
    let song = args[1];
    let time = args[2].toString();

    console.log(`Now Playing: ${song} - ${group} [${time}]`);
}