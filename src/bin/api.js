export let search_song(keyword, page) {
    let url = `http://songsearch.kugou.com/song_search_v2?keyword=${keyword}&pagesize=${page}&userid=-1&clientver=&platform=WebFilter&tag=em&filter=2&iscorrection=1&privilege_filter=0&_=1536545986959`

    return encodeURI(url)
}