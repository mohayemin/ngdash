import { Id } from './types';

const map64 = buildMap64();

export function pseudoUniqueId(): Id {
	let base32 = Math.random().toString(32).substr(2);
	return base32ToBase64(base32);
}

function base32ToBase64(base32: string): string {
	if(base32.length % 2 === 1)
		base32 = '0' + base32;

	return base32.match(/.{1,2}/g)
		.map(cc => parseInt(cc[0], 32) + parseInt(cc[1], 32))
		.map(code64 => map64[code64])
		.join('');
}

function buildMap64() {
	let m64 = [];
	// 10
	for (let x = 0; x <= 9; x++)
		m64.push(x);

	const a = 'a'.charCodeAt(0);
	const z = 'z'.charCodeAt(0);

	// 36
	for (let x = a; x <= z; x++)
		m64.push(String.fromCharCode(x));

	const A = 'A'.charCodeAt(0);
	const Z = 'Z'.charCodeAt(0);
	// 62
	for (let x = A; x <= Z; x++)
		m64.push(String.fromCharCode(x));

	m64.push('$', '_');

	return m64;
}

