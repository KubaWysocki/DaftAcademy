function* gen( [ h, m ,s ] ) {
    const clock = document.querySelector('#clock')
    while( true ) {
        s++
        if( s > 59 ) { m++; s = 0 }
        if( m > 59 ) { h++; m = 0 }
        if( h > 11 ) h -= 12
        yield clock.innerHTML = [ h, m, s ].map( el => el.toString().padStart( 2, '0' ) ).join( ':' ) 
    }
}
const timer = new gen( new Date().toLocaleTimeString().split( ':' ).map( el => +el ) )
setInterval( () => timer.next(), 1000 )