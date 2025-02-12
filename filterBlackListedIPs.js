const ips = [
    '192.168.1.1',
    '10.0.0.255',
    '172.16.45.67',
    '203.25.78.120',
    '8.8.4.4',
    '55.90.32.12',
    '190.45.23.199',
    '240.13.59.6',
    '100.20.99.180',
    '34.67.89.200'
  ]
const blackListedIps = [
    '203.25.78.120',
    '100.20.99.180',
    '34.67.89.200'
]

const allowAccess = (ip) => {
    console.log(`Access allowed for ip: ${ip}`);
}

const numberOfIps = ips.length;
for(let i = 0; i < numberOfIps; i++){
    if(blackListedIps.includes(ips[i])){
        continue;
    }
    allowAccess(ips[i]);
}