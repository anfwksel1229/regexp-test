const str = `hello 
010-1234-5678
anfwksel1229@naver.com
The quick brown fox jumps over the lazy dog.
abbcccdddd
나랏말싸미_듕귁에 달아
`
// 메소드

// const regexp = new RegExp('the','gi')
// const regexp = /fox/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// console.log(str) 

// 플래그 ( 옵션 )

// const regexp = /the/gi

// console.log(
//     str.match(/\b\w{2,3}\b/g)
//     )

console.log(
    str.match(/(?<=@).{1,}/g)
)