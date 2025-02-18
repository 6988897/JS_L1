function toWeirdCase(str) {
    const words = str.split(' ');
    
    
    const NWords = words.map(word => {
        return word.split('').map((c, i) => {
            
            return i % 2 === 0 ? c.toUpperCase() : c.toLowerCase();
        }).join('');
    });
    
    return NWords.join(' ');
}
