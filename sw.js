/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10/24/hello-world/index.html","94c6bd652a8f90f6e17785695fb6fd34"],["/2023/12/06/music/index.html","e08c33d21aa12439da2d36a1dbccedb8"],["/C/index.html","ed45430db3c02c82ed87a5a6674630d9"],["/Hardware/index.html","c8ef65769654d68bbfb1f94c4801dad0"],["/Mech/index.html","7c0ae7b14398a15a87bf3e7967967f0d"],["/archives/2023/10/index.html","c5054db5fdd7f84e971f70990162f2a8"],["/archives/2023/12/index.html","1f8e3c2fb270677a373bc452e669ad87"],["/archives/2023/index.html","a9b96e64709675e8a98e561560e5efce"],["/archives/index.html","0a72cff015bd87523892213a19f2ae02"],["/complete/index.html","66aacaa09255fef00ec533474ed5a4ee"],["/controller/index.html","116feceddefc595a4822b343d0efd4e3"],["/css/index.css","f71e137001f5a8eb4c2b86df931b5e6c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","d52e907bed956dd0c35896245b65d608"],["/honor/index.html","b050ed813097408fc161b4f2c052235c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/zuaKC.png","e9b0fae1b28a12d80a679774dddf354d"],["/img/卓晴教授留念.jpg","755c1894a5a4b5eefb9e9d28d47cbc31"],["/img/大湾区 奖状奖杯.jpg","a2467463c3bb22d9f68a736d0f48be70"],["/img/大湾区 院旗.jpg","3b6929931540865d8a6b3bc5908606ac"],["/img/大湾区合影.jpg","1bb3d3663d67ca59526ce414b38faf6e"],["/img/大湾区校旗.jpg","e40754cd797a36e71a636394886d0bc8"],["/img/大湾区领奖台.jpg","7bad54649fb370e4f762dfc7826eff71"],["/img/大电赛封箱摆放.jpg","6fd366cc67d69c3c2f7613b2c0bfc44d"],["/img/大电赛测评.jpg","a80e1fd93e079c30bfd94f8b1d0a5dcb"],["/img/大电赛测评留念.jpg","36f1f7c6b72e1133eac4fb141fa1d676"],["/img/大电赛测评留念2.jpg","5e937f30a18cc1c0783cfe535723d5d2"],["/img/智能车 农大 郑航.jpg","5255d05c1c6752904cb7b35338066ca9"],["/img/智能车 校旗.jpg","05be69efde17e1728688833255fcb20b"],["/img/格斗仓.jpg","a05c606ee4b5ee04712ff3282dc2b769"],["/img/粉色战鹰 战损版.jpg","f7bb851d22b5e5ceb89c2ccf94eff7ce"],["/img/粉色战鹰完整版.jpg","6684be607b9e556acb54e223a127520c"],["/img/通宵哥1.jpg","9dbe96e171c63cad48e38fcce67038f9"],["/img/通宵哥2.jpg","3e1147c318bb0a70ab246827e9da3b00"],["/img/通宵哥3.jpg","0f2af6c75dac9c48a9bffebbb6c52da6"],["/img/通宵哥5.jpg","9cc5966ebae940d19475a43cbcd715aa"],["/img/通宵哥6.jpg","875f06e9435fd4776ada088128f73705"],["/index.html","d89e08985b296ddd88bc9e59d74cdd50"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/map/README.html","964fb0a7e68b9f0d16ab9887d0b3a989"],["/map/index.html","131c76bb591de87c22d56c1fa59ef4a2"],["/map/js/jquery-1.9.1.min.js","24c51fb3b10d2d9453fb3b92394e4c87"],["/map/js/jquery-jvectormap-1.2.2.css","8e335461670da9c1bfb81658eb95cb04"],["/map/js/jquery-jvectormap-1.2.2.min.js","4e81db1f3fde288220522e10775a7a95"],["/map/js/jquery-jvectormap-cn-merc-en.js","213b0b0e80c48f143ad8828a95ec7962"],["/map/js/jquery-jvectormap-us-aea.js","05b58bf0c9273ddb6789c01245b7b74e"],["/map/js/jquery-jvectormap-world-mill.js","19b9535d8ea820f06364434467358180"],["/member/index.html","6f840a9171062893fa488c5ca8227f7f"],["/photo/index.html","7521979cb5fd68a061ee9873c7d79da7"],["/sw-register.js","1cf22776a341f8d263db667cd4345a2a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
