// This is the service worker with the Cache-first network
const CACHE = "ocdapp-cache-v1";
const precacheFiles = [ 
    '/', '11rU1kd5loZPKv9ejtPgn3DPEizxQPosmqPnK1Yojnsw.json','11tlo-JxVMTg1EQYHOJ36kqv1tfxbROy0EBBWl-0Vww4.json','11y__9D0n0cwd0aK6HnHp045KqH8BvQjy8lbPH_Ng_Tg.json','12bH-9Xw7aYquTO2oxjlttck0seZsbgpdEbnpek2RW58.json','12bHk8-z0oED-5qDHTA_idZTlMIYcgz7pyD746uYSn0g.json','13OIc9DK-a15XA3xgy1UJrwlhPLsn4FYGnwo-evri-0E.json','13xL05v8uJSh6u2Dj5A_1PGjyN3MwPRxMLGMd3ffJu-k.json','13y-z85Egq1hoQ9uKevvaK3tknJvQgGidPn-7lHgYxpY.json','14wNw7Xg2U-y3Kykkpwa0Qyhhvt4j90p8TWMqdug7yCI.json','14zl0XbbsmfqvhYCEhB06jCQoCivfjaN4.json','15NWt-cQK7gschpGOo0rqjYM8Pqf89Rr2Sq6_bemkYRQ.json','15m0UQoRTq6dJFOqWCIo3VEkPuJ4doGlGaA5fDm669-I.json','15oum63mI1lJR0vcvtRzpqAT_RJaBw3RsRoKHSxLCq1o.json','15vbce_WaAG1xE4lMs7xAEQUzrlEKKEWLBXMs9ZFNjcs.json','16Cr9HCMBq_zD7uuCz3DF4dckOYsLiwygtin0OUxXFCk.json','16enVBHXM_b411OReV-0MFnwB2dYD_7hwW2VbEeA9nuQ.json','17-l-lPdJ823wmZW4KbUlowhhvbXgWefHVFXSXWFELs8.json','175oKwK2b5mQ6DgXCV39FLg8X0GTCt0cHBzjxdI6QxMw.json','178jnhziAxpzNlAXR9Num3djlZ55B9A_R.json','17lrIzwSpD_rB1NLJ8OQZnUvG2ZRPKmwhkJWBROiD0QY.json','17xkZpknBVDp3za1WitwdnH-a2-ToJu5qL8IbB38Ekh4.json','18-ReH-5A5mwsd72jS2ziRce0iW2ZoFS2GHfDJ0QOq-k.json','18ISyzdy0wZERa8bGa91uOZiXNpNnjyhp2p2gk9ExDKY.json','18pPF2eVqdTzG0tkE66Jt3U2rIkuPK_KqX0R_ILWVVC8.json','18zVN95wh2aiCm3kOJEY-8t6HNg0mBbJT3nLeyQNLB7o.json','1ADgmnLBmxYPmWPR-Ti70zMXa-fo3nbZckcGt4KaGy28.json','1AbTfFK3kBYajA3rMw7fQWw-8XntGI3sCebIAf839Crs.json','1BDKdbNhKf-uTr2Pat_cfAWz0rg1YfLhddbNQ4usrVEU.json','1Bcyc2InCZ718A4mZNfF7fl94_Vn10VWFqU_gXqW9eOU.json','1Bk1DO_jM1w0xA34vIl0oJOh-nl_ogd6K3FZvwjsFZFY.json','1C2aaWPghQ4_FA_fHmbd0_6q2vC8r6hZB6De7PtrqyFQ.json','1D1cDxuN2ptNGG97kDUiDeL6ilpfKNUR5-iLYKao2CRE.json','1DC_P6qA-4WuIZ3Xb9NEtEVxxrpsU1x6iUERcM60RA0g.json','1DSXVz69GbDGhA2eqKrWaSUW_jimll5gyeFkQ0YEQYIo.json','1DUYYJKAmazEQaxA6MTDIVUuAlzeQ-_kEPh8G9WF_mgo.json','1E2aQaLqE047AJ-uoNvqwP7bvbYa9SFZt8vDjUcFJGSY.json','1E32Ufn0b_GB_eKprbzdq5DwLfXHHFqcs_K7vIg-Lkf8.json','1E7y5s0jc2O1l0mmNUgWTdCn-bhQDx86vxDwP-oSQDZM.json','1E93XGXmV5oXAFxFHamOnxjoDWKmRvQ6y002ETtDL4es.json','1F0DoQ3--2mQTlVXaWD5kTBYXSE7NBPZpTghLoZzjDqE.json','1F7iRBQWmmGC0M-U-qjGshkEj7yHBFFz3xgEcWAde3wQ.json','1Fpw0oFlMS5O5yLKjV4pyl_lZQpKEB_fM0rv9ETnSeBI.json','1GlQuBIBDpXkBV_NnYF4mQ1Ojh5gFE3bJ-coYsyMJi9c.json','1HW9xxV2qfGEMH0O0pG5hkneoIMkNSLcStL7Erfvo9vI.json','1HXfYhfcnAdSuCLqJ_4mSgwitTgJIntTcfbg0sNQeKRQ.json','1IKxp-asXtNy5S_DEXl61k0wl-lV6jpoROlThhVW1dFU.json','1IhLqLdiNUDF2y7cHvPjaH6Heh7Y7R0N5saqlwWe5ZAU.json','1Iojx-F1LX9gI1JJn0G-Xryn3S-mSK-KyjSyzylA83I0.json','1J9dYUjBbA1Y2opLEkckHzRMyBzQHlg1C.json','1JJWubaACVubp3wz6lNS6vkPSR8CKY7TVl2upRSDKGEw.json','1JY6i1WS7ZbtQOYg_bJItYTgl-0ZpDgAlHqg0FfGpfw4.json','1Jg6H_BDflOC1fxRedLoNmr5Bzqug7BW_oUgLQywaF9Y.json','1JmepukBBGMwR7_AFpqRVPA2qAhm7Ed85eAOg3nR5_Aw.json','1K4EVAvOynVl27XnTix9tgNyBTZntRoxPLeLdPtj7iOk.json','1LF2-qRguGsOtjVK-JrcfRkOOL5jwxUwLNXBT8Pqyw2o.json','1LG6DrRHMg5ZovLOyMMb5baO5nNHahbxdgawchxCAZ5I.json','1LNdmViPg7IAErww5N2HO1RQOPZPerWMA.json','1LobAmnEfiFGR-yuEBFenkf26y3epFkTNygxjDdrvXPs.json','1LsbhyT0p-E5Br2WlCEDfGbdKFa3IoVcrPIiM4n1UKmA.json','1M1yts0AxtK21U1UT4pzq9qYr9DoPpHwGE6Vm4EZ_DnQ.json','1MO7xSNhS50noYPmzL21m6LNxwlmq16F-10vPc7xFZjk.json','1MqkpIhGcUrJh3q14nWXgouyvLxK1AgsixxTUgf6YZNw.json','1NZ_lYNtnMUWa3o85ryf5HTFH7QgUnYfi2h7tVLJjQ30.json','1P1kTCaNjkam_nqhNCqdMJ-RGn3AH59U5XPKGj3g1poo.json','1P2r1n7y17JlRvsv3waCRQzD2MuttDMmjCcz7PEsLrzo.json','1P3ATd0dwz1tkKPjvgMjgptTcQu8glAlTQTDc2xgUqvM.json','1POFZ4pfAOOZpYx77POYEq-PF61dLeEZ1YGSjrXTAOLM.json','1PbUGHSbWXYbNTR4PJsSLYeiToxU8iFywT77uVPP-Tlg.json','1Q-STYqU_kBV-HkfXU47Jv5tnH4x2z4jmuS1BRAMm0Pg.json','1RTLKW49gCMsEAA4QOlp2dK4PA3stH5IbnKdQX7qC3JQ.json','1ReeUm_0KbkyCg0W6HLewa-OBz5iq9fb9yLRKqXzLjWk.json','1RfgCt1fiENRF8p4sFa0y49gX65UWmZwG9MUIIMOTet4.json','1RkdjdkTzfhB-L5mxe9cHHLilOKmMfcsf6EXlbDq5LtI.json','1SYYfDGRMz0qyWG8lVfCYInnAwcaRYmcndkYr8yxta4U.json','1SbQRVr3udEGDJqyZS2NnVshPZO4tu2jfvR3x_KWVMUo.json','1T-BEMmHU-pP3gaa26EjnvLxK1wCj0bD63tBeegby0jc.json','1T8NJ3NIf7zgbf_HQPDpYDIK-oEcQlmUcAjeitaKW5WA.json','1T8VBrsVfsK_GR42oc_xhjuuGcN_noeNBuo0gQNdzUMQ.json','1TMbqlj1wsDzhQfRvEO_Rps0ulRRHJV2K_j3GqcM_nUE.json','1TbShJwv00rxx-3YR_1CbvaKzpFJVzJVCo7uAp1x3K5Y.json','1TzPJhBMBaN2h78t_m2ZR5a4GjjsMZpMQnXPvT6RzYF4.json','1U8MZGwvwJ3URDPU5u4S13OGlkaMl4HcBd_PLxty1Kmo.json','1UPnQSFgX5jEGB0FNZBev4glOaImuWqxCvKA1wt8NILg.json','1URCBMEuLc3-IYh4rZkwEYWATj8d3IYdaqmnF60Bwi4U.json','1V36fooQDK6Mbr2l8iYJYHrS3jOIRzBGq9-MrslqZjbc.json','1V5wU1roGYNEoSodEmufhdmKolS_Jx2b4R-ngdzayQlQ.json','1VTi8T_PSCYZ1tdpXiDZ_ykfaAQ5jkU4CLYoUcL0tUFo.json','1Vokv2Syi16wKknnkUkxHHBexVWcirqp2g9DXEqVo5cg.json','1VtPb0bZJbKVDEW6h8MzB9-oUqeV4CwrAvgMcjsk5HJs.json','1Wgarjj49hZoOvJ6HH7MU5Nm2-UOCltBRqAGZujEMWcs.json','1Wn12-Dyz3EFkE9qsLzgVLHvKjGLDZg6Mrwy7fw1YX9Q.json','1XUBZXIyz24vJkH0ZVUbQNZL0L_tv102rroEIejXrAwY.json','1XUrsgmzgvT2hPrxpCgwdTvZTnqw6KcyWrKCp2dzk_Mw.json','1XmD1Yv1PAAwpMhgKy9WfO9PMldvwcBXciqjc77bZcjE.json','1XtUqEyd8v0OpHRGSAQIvUWUp0MdylNyroVEZPg09LWI.json','1YKLAs_dTIpxWVr0xIHXnmvzNJWYVRuDEzGQQzN93EkQ.json','1YNEAPb4k9y_j_F6uaGUxOPTePAvJwYGJ5e8ZjDZDaiU.json','1Zn74BFumPLa_unAahno1bb_oULHDrn5BoUhwJJdAEdA.json','1_VjXpBAU4Fwy7kmcczvkFpmWzH3iV2utH88dj58NTMA.json','1_mSGRnySqCgLTqnT91eMB9--jNkz-iOJRbWqj1EfIss.json','1_t8uZ-ONTcfoqEoC0XL_uSs7l6B-2HR6KUwFIhZZgFA.json','1a-6KmEYEbGWJVy-wcKhlIWA77ZfApgm6eI-QpRNeQxQ.json','1aaUKkw-4CnfEAuAOMeWFViiVM-ZG14gQyR56ZehRbko.json','1bWlhkE59MFs-N5kmUAPMGHjpY__uFNsctUFfFb4QAyg.json','1bZGrZmLj_ThRqQ6mQQKW6b7kCS8p4xLcFwSMW0EmAu4.json','1bmFfe9DT5OkdLNM7PMR0sdF9sJsPjZeZ1N8kvEL_Cr8.json','1brdOVpWmho7PiUTrUTBeT50vnvKTWV5I9F0Apxy3RWw.json','1cJQn0EOPMvnW8zbKAEFQBIYiTen1qorcTHCQRAJP2uo.json','1cJoShg3iGDNpvHMtkewV2gKGD8zRyCqYBISYkctTUKQ.json','1c_48Ddm3JXCksDEpTYCKWplAv5Pkyta20GaD7nVHiMs.json','1cfoyh8_Qy2wpYxoDeFG6n8cDFUhyfA5b1Qm1YwvmYiI.json','1cpa2L9BQn4PsfS8L-Qe4VsRw4Y6c9OntXMuRlQgtQLU.json','1crbFXRlUixHXVj7cXdjjU6HxUdRU-LW-jq5plu2BQ48.json','1dBHD5dVeQs5vAo8hPWukZizwYJnC9zMCrSjmFj6Uazs.json','1dIZqKINnyrmd4P-JPf_GOy1s1IdjOr9Add88I2hWxtM.json','1dJlN_Xk4ntK5owm5T3_Ar2skTG4aAozrTd8Di9dvLn8.json','1dVgV7x8lMmCAc9O7jqgtDYq6cEdQ0ReYAF8XvtvM2qk.json','1dmbqW2OKPfSIlYYfqDYM3L5_UY5P42dEsJKNORrUD5I.json','1e41wLhEv0wGlCSruYlnWJu2_hP46aj4gohdEs5ym7_4.json','1eVhENhEG6RxED650VYd8m4XmCfIIijHrDiIlnKRWx8Q.json','1f8o99nkDMnXTIFggirURtPsG_HVI0lBn39Riy4y7QIk.json','1fO_2Wo8dtSvJzq4lcJ0HZ31FC9RMMxG-bHni9cQP0Qg.json','1fcdmxrDp-uhN0alLeW9YdsZ6hVojOQRMV5drke_6Y1s.json','1g3Q4kwtR-8dmsE_Tp5wiuYxRIp6aT81RRs8JsGPsWJs.json','1g3bII_EE5PJ-B_G1UURbc8tDPxKPE6ByOUDSR4ycQ8o.json','1g9WS93vlZKBuJYVpvfUIVau73UQBc_bzS8ncGeiw6ak.json','1gAkh0xGi_1LI5m6EneGtXOlbO6ICyFA8BJnYdQmanyw.json','1gSeoxezsl4ecyu5kUQVWRwwgthf1idftUaIY5f4dbyY.json','1gU0StacPpS7V5Sexzrs31wbkE6uqwVe-V1IZC3aOYO8.json','1gbfH5h8GCr--KGBhBNFnle2jkY8JUWtXRWBdIVOJ_as.json','1hI3MxW04rCl3XkVaUxzOEEP-vQ02XUt-ZSaHT6uP9aw.json','1hYHxhxq7EcgvEJRJrSTKP7-AuZKRQ272CS1lFVQVx68.json','1i5HvzDTvd1lEY7EhAlJM9rU3esnpq_pK.json','1ik7V0guBa_1msBFyc93OFnCZNd0gkeyd.json','1iwR7SVqeR95RMmeQJ5Z9PouLNbUl8p645KAH2FvzcCg.json','1jF4ZKCNSFNvYuEnHkrM-u16IiUe4tbr40JsXc3P58AI.json','1janTaFUQb5afUmNFnlipeTGlK_hd25bOEGZlDJ0raYY.json','1jcnz7fCxsEhm4o3FvUNY9OpXInmBXXRUu161l09fEwQ.json','1jko32ocOOL_zHLtlFieEpf-ayjs6sARGm9QJ_n3OcN8.json','1kjk0AeJsE3ctntHHNiuCtoWkiXKWxFEc99_GrUu6MzE.json','1lHN6FxwfzVz1z0dH-oAGH-BmgweIAW5iSWOLNSZZM1o.json','1mDZYSIXLmS9R1IG9ZRC3YcW4853eKQQL-pT5I8mAVJk.json','1mY1gxgg0vvV5WWOjShgf9I539m7ea1CyFgbLEwCliyM.json','1mgJfrUWCVYrOVrmoICZ_YyeMYLJq6J3jagZZeAez3MI.json','1mu1PD6XnHmyp9H25rgKtbf_ia9Kq12RMzKWK4mgYpVg.json','1nSLp8j1ZJY99KaDy7TmtJYadHbRrbSzZ5YLtG5n8ltM.json','1ncED3od2G_1WzV2M6i-Fos0ChfpAKxppMIKRNtsOZ-k.json','1o8dNC4VF5_KEd61LgddVSI_RfvJfndHkLgFPDDV5f-E.json','1oMUfq2HTweJKJQIhyxLFv3QrCSkvxPIDQyoJicI6Pmc.json','1op5TRqDlcTcDrK-djs_1wdB0Fn_2ZCO5_qg0obBm5fs.json','1qVC1tdS7R5grgsMz3zmqWQNLsb2RNox1iq36lnmM7f4.json','1qjQRIPWQCFmupb10-5whuJAQDmgiVHRNDfRM8MOapCg.json','1qmiVZAuIZiuj0NkmAI8isSUcfu1UMDUux86H0AfvZ_E.json','1qnDr1VAkqzTocQ-f_LSMR-nHR7ILYtSOMTnwW1ma9vU.json','1rA2evNacLUHM_wFG0mUnoIWlPEa1zVOYdPLeBmyOZAg.json','1rTRiGEaBcDtrMboCWyN4rgeJVlX9zMaBCtUntDskF2U.json','1t78ghgHAWbEqysIkgri3E2UvPswFJXnYDp3PP3uS8to.json','1tBIl7Z_lG5G4p1aWECJYpXVbok3gEN6QaaV7j3gD7pM.json','1tJUIkokQBICglXeUJ9qgL8KNZkVXUVB2yWoRqDD7RZQ.json','1uLmSLM2ItTUuSLCfFk1GtSCRUI8V8DS3x3TwLb6pMhw.json','1v-nLO1g_Eu43u_4HHxI0QKXjwt7rmm1gLXx675noUuY.json','1v3gOWle55tXcnCcVyzrLCTHCAwf6aJM6jDH0eX-s2v4.json','1vzVlLaGpe34YXCTZJ4GTRTQ4w6xXoiZnUfDuee8cNNU.json','1wLtLwncP0MW47hqi2LevjT66VKAGSCda8V6iJIwjbfk.json','1x9ZAhAsgb0olPUjgne9g7wJMZ9GswgSVGwt55wWoZb4.json','1xi_27evDvudoVhMumlbWpNBoQlU93FG1.json','1xihNmrWEfSvG5YmlU1Bid5yMRuNY4EgcTSjE0PWGjSU.json','1xl8YqdqpfXFKw4NQqO3sIBYAb9ZFX8wq6Cq8E7vWoEY.json','1xoTVt0suNKS2WnHbd3M2Uv7tXbfom4sAQ7E91_OIq_Y.json','1y7dhEZuR1RcRO70cbQqcA6-QILRbHCHIF9MAjyGXbRg.json','1yC_RENnxLDt_ibTjYP_kb-5SxJnd9rYP-_ZqK_3qwH8.json','1z5QzNAGIpsS8xSKF4OveH5kqzRNJLUusRiu6Vwp9e8w.json','1zjsNGYL6J364roiGds6hhn2nHgPTxqlyaaQya-x3P8M.json','1zuoBfaJ30jcsWaU6iONwfCS3-WDtKSyQ7GxIqp6kDmk.json','1zz_bu5cyLGKukW5tJDr_9HyL982laJ_9huayj1SORFc.json','Logo_OCD.png','dfg','index.html','manifest.json','root.json','service-worker.js','tailwind.css'];

self.addEventListener("install", function (event) {
  console.log("[PWA Builder] Install Event processing");

  console.log("[PWA Builder] Skip waiting on install");
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      console.log("[PWA Builder] Caching pages during install");
      return cache.addAll(precacheFiles);
    })
  );
});

// Allow sw to control of current page
self.addEventListener("activate", function (event) {
  console.log("[PWA Builder] Claiming clients for current page");
  event.waitUntil(self.clients.claim());
});

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", function (event) { 
  if (event.request.method !== "GET") return;

  event.respondWith(
    fromCache(event.request).then(
      function (response) {
        // The response was found in the cache so we responde with it and update the entry

        // This is where we call the server to get the newest version of the
        // file to use the next time we show view
        event.waitUntil(
          fetch(event.request).then(function (response) {
            return updateCache(event.request, response);
          })
        );

        return response;
      },
      function () {
        // The response was not found in the cache so we look for it on the server
        return fetch(event.request)
          .then(function (response) {
            // If request was success, add or update it in the cache
            event.waitUntil(updateCache(event.request, response.clone()));

            return response;
          })
          .catch(function (error) {
            console.log("[PWA Builder] Network request failed and no cache." + error);
          });
      }
    )
  );
});

function fromCache(request) {
  // Check to see if you have it in the cache
  // Return response
  // If not in the cache, then return
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      if (!matching || matching.status === 404) {
        return Promise.reject("no-match");
      }

      return matching;
    });
  });
}

function updateCache(request, response) {
  return caches.open(CACHE).then(function (cache) {
    return cache.put(request, response);
  });
}