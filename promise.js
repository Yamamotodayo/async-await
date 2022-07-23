// func = async () => {
//     await log("3");
//     await log("2");
//     await log("1");
// };

// log = (num) => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// func();

import fetch from "node-fetch";

// 非同期処理をおこなう関数を宣言
const getGitUsername = () => {
    return new Promise((resolve, reject) => {
        const url = 'https://api.github.com/users/yamamotodayo'

        //GitHub APIをFetchメソッドで実行
        fetch(url).then(res => res.json())
            .then(json => {
                console.log("これは非同期処理成功時のメッセージです");
                return resolve(json.login)
            }).catch(error => {
                console.error("これは非同期処理失敗時のメッセージです", error);
                return reject(null)
            })
    })
};

const message = "GitのユーザーIDは"
getGitUsername().then(username => {
    console.log(message + username);
});