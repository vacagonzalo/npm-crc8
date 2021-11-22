crc8 = (polynomial) => {
    const size = 0x100;
    const mask = 0xff;
    const byteSize = 8;
    let table = Array(size).fill(0x00);
    for(let i = 0; i < size; ++i) {
        let crc = i;
        for(let b = 0; b < byteSize; ++b) {
            if(crc & 0x80) {
                crc = (crc << 1) ^ polynomial;
            } else {
                crc = (crc << 1);
            }
        }
        table[i] = (crc & mask);
    }
    return (bytes) => {
        // TODO: build CRC from bytes
    }
};
