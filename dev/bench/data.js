window.BENCHMARK_DATA = {
  "lastUpdate": 1593115365999,
  "repoUrl": "https://github.com/ros-industrial-consortium/tesseract",
  "entries": {
    "C++ Benchmark": [
      {
        "commit": {
          "author": {
            "email": "powelson.matthew@gmail.com",
            "name": "Matthew Powelson",
            "username": "mpowelson"
          },
          "committer": {
            "email": "levi.armstrong@gmail.com",
            "name": "Levi Armstrong",
            "username": "Levi-Armstrong"
          },
          "distinct": true,
          "id": "2f133f92275bc2a1ab5727c9fae176191c338b36",
          "message": "Set CXX_STANDARD 14 instead of -std=c++14 for xenial builds",
          "timestamp": "2020-06-25T14:15:31-05:00",
          "tree_id": "6c1be0f8aff47accd3a9577bc5ada66e88ddb668",
          "url": "https://github.com/ros-industrial-consortium/tesseract/commit/2f133f92275bc2a1ab5727c9fae176191c338b36"
        },
        "date": 1593115364021,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_0/real_time",
            "value": 77.6256062413306,
            "unit": "us/iter",
            "extra": "iterations: 7883\ncpu: 77.58482316377015 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 79.04032845894974,
            "unit": "us/iter",
            "extra": "iterations: 8001\ncpu: 79.04054380702412 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 81.01485118155057,
            "unit": "us/iter",
            "extra": "iterations: 8675\ncpu: 80.99927435158504 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 83.71098453904312,
            "unit": "us/iter",
            "extra": "iterations: 8667\ncpu: 83.6945111341871 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 95.55812788451239,
            "unit": "us/iter",
            "extra": "iterations: 7757\ncpu: 95.54548240299087 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 109.26190001880666,
            "unit": "us/iter",
            "extra": "iterations: 5301\ncpu: 109.242267873986 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 162.1522146879262,
            "unit": "us/iter",
            "extra": "iterations: 4262\ncpu: 162.151179962459 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 274.4112563913286,
            "unit": "us/iter",
            "extra": "iterations: 2699\ncpu: 274.36950463134485 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 549.2250141370748,
            "unit": "us/iter",
            "extra": "iterations: 1344\ncpu: 549.2187678571437 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 1652.3841850217484,
            "unit": "us/iter",
            "extra": "iterations: 454\ncpu: 1652.070740088104 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 4.607237659801225,
            "unit": "us/iter",
            "extra": "iterations: 146432\ncpu: 4.60725857053103 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 7.338201663078481,
            "unit": "us/iter",
            "extra": "iterations: 87428\ncpu: 7.336926419453722 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 41.22986110145707,
            "unit": "us/iter",
            "extra": "iterations: 17286\ncpu: 41.22686682864747 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 24.436379304930508,
            "unit": "us/iter",
            "extra": "iterations: 31882\ncpu: 24.361180979863253 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 5.482862539997768,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.4827687700000105 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 6.970436156704812,
            "unit": "us/iter",
            "extra": "iterations: 103942\ncpu: 6.969572684766498 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 5.556060369999614,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.553848549999998 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 73.7589903884167,
            "unit": "us/iter",
            "extra": "iterations: 10196\ncpu: 73.75782885445263 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 71.51955469942078,
            "unit": "us/iter",
            "extra": "iterations: 10512\ncpu: 71.51071908295263 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 5.672796719396274,
            "unit": "us/iter",
            "extra": "iterations: 124916\ncpu: 5.669259686509351 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 41.8873282897672,
            "unit": "us/iter",
            "extra": "iterations: 15267\ncpu: 41.877966725617455 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 68.11293623017436,
            "unit": "us/iter",
            "extra": "iterations: 10287\ncpu: 68.09766462525518 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.5774278666021048,
            "unit": "us/iter",
            "extra": "iterations: 1159151\ncpu: 0.5774304478018832 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.6141446751399027,
            "unit": "us/iter",
            "extra": "iterations: 1164547\ncpu: 0.6140721868675107 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 13.323265959989357,
            "unit": "us/iter",
            "extra": "iterations: 50188\ncpu: 13.321707539650927 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 26.015139132125977,
            "unit": "us/iter",
            "extra": "iterations: 25810\ncpu: 26.011440488182878 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 70.07091793086207,
            "unit": "us/iter",
            "extra": "iterations: 10613\ncpu: 70.05970130971447 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.5896711495411024,
            "unit": "us/iter",
            "extra": "iterations: 1062711\ncpu: 0.5896736883310691 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.6598202607552235,
            "unit": "us/iter",
            "extra": "iterations: 1177656\ncpu: 0.6596348543207857 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 72.59238943786661,
            "unit": "us/iter",
            "extra": "iterations: 9108\ncpu: 72.5913321256038 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 5.698702624937416,
            "unit": "us/iter",
            "extra": "iterations: 121641\ncpu: 5.697440723111439 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 5.668292224470287,
            "unit": "us/iter",
            "extra": "iterations: 128107\ncpu: 5.6665262319779455 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 14.146734318409827,
            "unit": "us/iter",
            "extra": "iterations: 51637\ncpu: 14.146791757848025 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 72.08335388767826,
            "unit": "us/iter",
            "extra": "iterations: 8887\ncpu: 72.06740238550663 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 4.922785954360131,
            "unit": "us/iter",
            "extra": "iterations: 152631\ncpu: 4.92280899686172 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 4.281528534289428,
            "unit": "us/iter",
            "extra": "iterations: 158476\ncpu: 4.279822010903859 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 7.073320553047333,
            "unit": "us/iter",
            "extra": "iterations: 104223\ncpu: 7.068940377843664 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 40.46105254156629,
            "unit": "us/iter",
            "extra": "iterations: 16368\ncpu: 40.449637891006894 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 22.656148283158068,
            "unit": "us/iter",
            "extra": "iterations: 30725\ncpu: 22.655823661513494 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 5.190764149516031,
            "unit": "us/iter",
            "extra": "iterations: 138821\ncpu: 5.1895921294328655 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 7.303538811780255,
            "unit": "us/iter",
            "extra": "iterations: 99712\ncpu: 7.303481085526297 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 5.092502699999386,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.091890079999999 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 76.07989261205422,
            "unit": "us/iter",
            "extra": "iterations: 8744\ncpu: 76.06756312900296 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 74.53371459670565,
            "unit": "us/iter",
            "extra": "iterations: 10105\ncpu: 74.53323097476486 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 5.795960025484954,
            "unit": "us/iter",
            "extra": "iterations: 122428\ncpu: 5.794886120822041 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 45.29090886598369,
            "unit": "us/iter",
            "extra": "iterations: 16975\ncpu: 45.29046845360793 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 72.24695144949627,
            "unit": "us/iter",
            "extra": "iterations: 9969\ncpu: 72.2384937305645 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.5198818349999783,
            "unit": "us/iter",
            "extra": "iterations: 1000000\ncpu: 0.5196644950000007 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.5631823115382903,
            "unit": "us/iter",
            "extra": "iterations: 1163459\ncpu: 0.5631843528650347 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 13.400241980047266,
            "unit": "us/iter",
            "extra": "iterations: 52120\ncpu: 13.397586358403641 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 27.626458502869884,
            "unit": "us/iter",
            "extra": "iterations: 26050\ncpu: 27.626362802303472 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 73.03931386691737,
            "unit": "us/iter",
            "extra": "iterations: 8596\ncpu: 73.02926395998104 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.5683483433491966,
            "unit": "us/iter",
            "extra": "iterations: 1207949\ncpu: 0.5681616906011753 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.5954590905393324,
            "unit": "us/iter",
            "extra": "iterations: 1253622\ncpu: 0.5954537197017922 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 72.4615376407286,
            "unit": "us/iter",
            "extra": "iterations: 8528\ncpu: 72.44719418386482 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 5.74132716680758,
            "unit": "us/iter",
            "extra": "iterations: 128057\ncpu: 5.740839993128082 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 5.668405877797799,
            "unit": "us/iter",
            "extra": "iterations: 129130\ncpu: 5.667675830558348 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 14.36628405713757,
            "unit": "us/iter",
            "extra": "iterations: 44741\ncpu: 14.363040388011115 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 73.60598545371707,
            "unit": "us/iter",
            "extra": "iterations: 8937\ncpu: 73.60620957815857 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 4.597324453629709,
            "unit": "us/iter",
            "extra": "iterations: 144224\ncpu: 4.596465061293503 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 4.770701452684399,
            "unit": "us/iter",
            "extra": "iterations: 153922\ncpu: 4.769993295305444 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 7.010039526951721,
            "unit": "us/iter",
            "extra": "iterations: 100286\ncpu: 7.00814522465748 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 44.487396480273695,
            "unit": "us/iter",
            "extra": "iterations: 14717\ncpu: 44.48098396412313 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 23.65299187661995,
            "unit": "us/iter",
            "extra": "iterations: 31514\ncpu: 23.6491837278671 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 5.307917839953329,
            "unit": "us/iter",
            "extra": "iterations: 127775\ncpu: 5.307575722950506 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 7.047154507115121,
            "unit": "us/iter",
            "extra": "iterations: 101484\ncpu: 7.045471690118697 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 4.989048417369876,
            "unit": "us/iter",
            "extra": "iterations: 141189\ncpu: 4.988673324409115 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 71.38799021173689,
            "unit": "us/iter",
            "extra": "iterations: 9399\ncpu: 71.37007937014643 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 70.15382284636046,
            "unit": "us/iter",
            "extra": "iterations: 10076\ncpu: 70.14892338229491 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 5.847454009900871,
            "unit": "us/iter",
            "extra": "iterations: 128669\ncpu: 5.846780887393252 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 46.25426540942037,
            "unit": "us/iter",
            "extra": "iterations: 16597\ncpu: 46.250351569561055 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 66.31954691265085,
            "unit": "us/iter",
            "extra": "iterations: 9539\ncpu: 66.30893259251457 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.5790647587815839,
            "unit": "us/iter",
            "extra": "iterations: 1289910\ncpu: 0.5789460442976626 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.6859296478045342,
            "unit": "us/iter",
            "extra": "iterations: 1104898\ncpu: 0.685932025399635 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 13.54711927512543,
            "unit": "us/iter",
            "extra": "iterations: 51595\ncpu: 13.543287256517212 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 25.32625476488889,
            "unit": "us/iter",
            "extra": "iterations: 27178\ncpu: 25.32611479873397 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 76.43160682175329,
            "unit": "us/iter",
            "extra": "iterations: 10232\ncpu: 76.42151837372863 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.6098032744597838,
            "unit": "us/iter",
            "extra": "iterations: 1104854\ncpu: 0.6097086945424415 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.6397663245396448,
            "unit": "us/iter",
            "extra": "iterations: 1174321\ncpu: 0.6397170628814468 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 75.10028740033356,
            "unit": "us/iter",
            "extra": "iterations: 9405\ncpu: 75.08896629452414 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 6.356613423392691,
            "unit": "us/iter",
            "extra": "iterations: 98604\ncpu: 6.356638290535918 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 6.120359126535114,
            "unit": "us/iter",
            "extra": "iterations: 115586\ncpu: 6.119355847594071 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 15.1067208064618,
            "unit": "us/iter",
            "extra": "iterations: 45284\ncpu: 15.103798626446304 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 72.89904782830129,
            "unit": "us/iter",
            "extra": "iterations: 7736\ncpu: 72.8982470268869 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 5.186534979998214,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.1681828700000665 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 4.845417138033459,
            "unit": "us/iter",
            "extra": "iterations: 135068\ncpu: 4.844350416086639 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 7.864340718112465,
            "unit": "us/iter",
            "extra": "iterations: 93300\ncpu: 7.864200653804836 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 43.57943827974428,
            "unit": "us/iter",
            "extra": "iterations: 15951\ncpu: 43.57432850604985 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 23.956062802910594,
            "unit": "us/iter",
            "extra": "iterations: 29712\ncpu: 23.94929079159963 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 5.47898851670092,
            "unit": "us/iter",
            "extra": "iterations: 131147\ncpu: 5.47772909788256 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 7.582288440917529,
            "unit": "us/iter",
            "extra": "iterations: 93260\ncpu: 7.582315472871501 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 5.12432026512624,
            "unit": "us/iter",
            "extra": "iterations: 127638\ncpu: 5.123161354768888 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 69.01676360490133,
            "unit": "us/iter",
            "extra": "iterations: 9831\ncpu: 69.00600274641357 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 72.98012566531965,
            "unit": "us/iter",
            "extra": "iterations: 10146\ncpu: 72.97868312635553 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 5.719433280115515,
            "unit": "us/iter",
            "extra": "iterations: 119627\ncpu: 5.7178410643081845 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 45.45999285847349,
            "unit": "us/iter",
            "extra": "iterations: 16383\ncpu: 45.45597729353541 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 68.04053339057683,
            "unit": "us/iter",
            "extra": "iterations: 10482\ncpu: 68.0226417668383 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.6333287525437331,
            "unit": "us/iter",
            "extra": "iterations: 1235522\ncpu: 0.6333029262125618 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.6196157867357778,
            "unit": "us/iter",
            "extra": "iterations: 1143745\ncpu: 0.6195297422065312 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 13.637794536320571,
            "unit": "us/iter",
            "extra": "iterations: 52968\ncpu: 13.636163476061121 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 25.71715751213537,
            "unit": "us/iter",
            "extra": "iterations: 25725\ncpu: 25.712349854227025 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 69.02559272003995,
            "unit": "us/iter",
            "extra": "iterations: 9588\ncpu: 69.3231902377964 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.6251915725107486,
            "unit": "us/iter",
            "extra": "iterations: 1154294\ncpu: 0.6251935486106657 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.6475809070908444,
            "unit": "us/iter",
            "extra": "iterations: 1112832\ncpu: 0.6474946155394536 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 73.50437512471282,
            "unit": "us/iter",
            "extra": "iterations: 10026\ncpu: 73.4955612407748 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 5.845913873377704,
            "unit": "us/iter",
            "extra": "iterations: 120706\ncpu: 5.84515291700498 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 5.76052692984976,
            "unit": "us/iter",
            "extra": "iterations: 114167\ncpu: 5.759407963772374 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 13.750100208811624,
            "unit": "us/iter",
            "extra": "iterations: 49327\ncpu: 13.750159527236354 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 77.40821129155235,
            "unit": "us/iter",
            "extra": "iterations: 9423\ncpu: 77.3985686087236 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 4.832222166594802,
            "unit": "us/iter",
            "extra": "iterations: 147808\ncpu: 4.832239202208203 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 5.493001629997707,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.491881450000022 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 8.41939448599285,
            "unit": "us/iter",
            "extra": "iterations: 77947\ncpu: 8.417435565191694 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.559451028298831,
            "unit": "us/iter",
            "extra": "iterations: 421570\ncpu: 1.5594328960789479 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.687092682640087,
            "unit": "us/iter",
            "extra": "iterations: 424060\ncpu: 1.686778595010157 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 8.336650591597504,
            "unit": "us/iter",
            "extra": "iterations: 94743\ncpu: 8.336211783456283 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 8.97121503901817,
            "unit": "us/iter",
            "extra": "iterations: 80218\ncpu: 8.96988582363071 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 44.92467899911541,
            "unit": "us/iter",
            "extra": "iterations: 15866\ncpu: 44.92481072734168 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 4.565280665560463,
            "unit": "us/iter",
            "extra": "iterations: 155117\ncpu: 4.564120689543952 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 23.5994942694728,
            "unit": "us/iter",
            "extra": "iterations: 32545\ncpu: 23.59903444461518 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 25.1409100205198,
            "unit": "us/iter",
            "extra": "iterations: 28262\ncpu: 25.134616799943796 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.7007544322782588,
            "unit": "us/iter",
            "extra": "iterations: 390544\ncpu: 1.7007605801138825 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 4.128056534340314,
            "unit": "us/iter",
            "extra": "iterations: 164944\ncpu: 4.127509130371576 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.7962789476099871,
            "unit": "us/iter",
            "extra": "iterations: 807191\ncpu: 0.7962818354020322 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.8498759178357602,
            "unit": "us/iter",
            "extra": "iterations: 856771\ncpu: 0.8497657752188188 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 27.96092581613921,
            "unit": "us/iter",
            "extra": "iterations: 27324\ncpu: 27.959465963988073 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.737291900768151,
            "unit": "us/iter",
            "extra": "iterations: 395840\ncpu: 1.7370907437348588 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 20.88448362938914,
            "unit": "us/iter",
            "extra": "iterations: 32314\ncpu: 20.88287847372675 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.8420902318736334,
            "unit": "us/iter",
            "extra": "iterations: 853224\ncpu: 0.8420662006694625 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.8439947051195783,
            "unit": "us/iter",
            "extra": "iterations: 748270\ncpu: 0.8437109158458785 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 29.065772939522446,
            "unit": "us/iter",
            "extra": "iterations: 25055\ncpu: 29.065489523049717 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 8.976255735472717,
            "unit": "us/iter",
            "extra": "iterations: 80900\ncpu: 8.9735471940669 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 23.659994310244684,
            "unit": "us/iter",
            "extra": "iterations: 29351\ncpu: 23.6598825252973 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 28.364185041472332,
            "unit": "us/iter",
            "extra": "iterations: 24227\ncpu: 28.354863251743783 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 28.748725937734466,
            "unit": "us/iter",
            "extra": "iterations: 24447\ncpu: 28.747106761565874 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 6.010424801895077,
            "unit": "us/iter",
            "extra": "iterations: 110548\ncpu: 6.009500814125962 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 5.03112937160986,
            "unit": "us/iter",
            "extra": "iterations: 149716\ncpu: 5.031143050842913 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 8.176015887627868,
            "unit": "us/iter",
            "extra": "iterations: 83650\ncpu: 8.174583897190686 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.4061048850031757,
            "unit": "us/iter",
            "extra": "iterations: 530276\ncpu: 1.4058198372168589 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.516076709285209,
            "unit": "us/iter",
            "extra": "iterations: 460909\ncpu: 1.5159121279905765 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 7.463198337388769,
            "unit": "us/iter",
            "extra": "iterations: 87573\ncpu: 7.461277220147646 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 8.474892403797535,
            "unit": "us/iter",
            "extra": "iterations: 79882\ncpu: 8.518458526326285 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 42.10690752886381,
            "unit": "us/iter",
            "extra": "iterations: 16470\ncpu: 42.097650151791356 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 4.4091148352061085,
            "unit": "us/iter",
            "extra": "iterations: 152192\ncpu: 4.409073144449104 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 20.725414387768854,
            "unit": "us/iter",
            "extra": "iterations: 31777\ncpu: 20.722718035056733 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 23.68236014070209,
            "unit": "us/iter",
            "extra": "iterations: 28997\ncpu: 23.682153464151234 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.6328666233788611,
            "unit": "us/iter",
            "extra": "iterations: 435841\ncpu: 1.632439011015478 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 3.9279720404192853,
            "unit": "us/iter",
            "extra": "iterations: 161805\ncpu: 3.927677692283916 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.8523522746157302,
            "unit": "us/iter",
            "extra": "iterations: 788419\ncpu: 0.8521229701465961 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.8428623142642697,
            "unit": "us/iter",
            "extra": "iterations: 826578\ncpu: 0.8428664663225832 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 25.423506590818956,
            "unit": "us/iter",
            "extra": "iterations: 26021\ncpu: 25.420268782906447 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.6951280995652134,
            "unit": "us/iter",
            "extra": "iterations: 422640\ncpu: 1.6949612672723489 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 21.36933651611134,
            "unit": "us/iter",
            "extra": "iterations: 31838\ncpu: 21.313852220616525 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.8279424561452935,
            "unit": "us/iter",
            "extra": "iterations: 883083\ncpu: 0.827826504416927 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.8782651085579242,
            "unit": "us/iter",
            "extra": "iterations: 892706\ncpu: 0.878247884521865 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 29.127215573529906,
            "unit": "us/iter",
            "extra": "iterations: 23129\ncpu: 29.11832595442893 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 9.025290246802706,
            "unit": "us/iter",
            "extra": "iterations: 72366\ncpu: 9.024368570875813 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 23.315351599578282,
            "unit": "us/iter",
            "extra": "iterations: 29070\ncpu: 23.309221740626317 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 29.43888773406948,
            "unit": "us/iter",
            "extra": "iterations: 23284\ncpu: 29.438991367462318 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 31.240200282820883,
            "unit": "us/iter",
            "extra": "iterations: 23337\ncpu: 31.227934653125377 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 5.700106903803521,
            "unit": "us/iter",
            "extra": "iterations: 108911\ncpu: 5.700128205599032 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 4.914884130213902,
            "unit": "us/iter",
            "extra": "iterations: 144041\ncpu: 4.913570143223003 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 8.664971874288623,
            "unit": "us/iter",
            "extra": "iterations: 79038\ncpu: 8.664465092740153 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.5180558229790926,
            "unit": "us/iter",
            "extra": "iterations: 469502\ncpu: 1.5176662847016362 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.7009505619993264,
            "unit": "us/iter",
            "extra": "iterations: 412456\ncpu: 1.700598330488645 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 8.698985361369465,
            "unit": "us/iter",
            "extra": "iterations: 90309\ncpu: 8.698278300058805 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 9.838054193697493,
            "unit": "us/iter",
            "extra": "iterations: 68126\ncpu: 9.837270880427592 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 45.478377389369236,
            "unit": "us/iter",
            "extra": "iterations: 15276\ncpu: 45.471150432049136 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 4.7751726624926265,
            "unit": "us/iter",
            "extra": "iterations: 138374\ncpu: 4.774456566984979 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 22.504056484993843,
            "unit": "us/iter",
            "extra": "iterations: 29229\ncpu: 22.501767799103835 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 24.870154642476276,
            "unit": "us/iter",
            "extra": "iterations: 28013\ncpu: 24.864135508514316 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.6208782346623012,
            "unit": "us/iter",
            "extra": "iterations: 433662\ncpu: 1.620883194746136 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 4.061179704535849,
            "unit": "us/iter",
            "extra": "iterations: 166451\ncpu: 4.05959214423467 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.8282888503009215,
            "unit": "us/iter",
            "extra": "iterations: 813726\ncpu: 0.8282401373435315 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.8459816013422026,
            "unit": "us/iter",
            "extra": "iterations: 825495\ncpu: 0.8458855111175781 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 27.062386277591873,
            "unit": "us/iter",
            "extra": "iterations: 26147\ncpu: 27.05939568592883 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.9556534583503387,
            "unit": "us/iter",
            "extra": "iterations: 349603\ncpu: 1.955332153900295 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 23.456324349561466,
            "unit": "us/iter",
            "extra": "iterations: 29980\ncpu: 23.453058238825896 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.8558211723959167,
            "unit": "us/iter",
            "extra": "iterations: 739170\ncpu: 0.8557576619722056 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.8547334135007765,
            "unit": "us/iter",
            "extra": "iterations: 735131\ncpu: 0.8545806339278242 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 26.800143070111396,
            "unit": "us/iter",
            "extra": "iterations: 24820\ncpu: 26.800233964543995 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 9.054097084808587,
            "unit": "us/iter",
            "extra": "iterations: 71865\ncpu: 9.05282357197516 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 24.234643663572953,
            "unit": "us/iter",
            "extra": "iterations: 29938\ncpu: 24.23184437838157 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 28.705435267198034,
            "unit": "us/iter",
            "extra": "iterations: 23597\ncpu: 28.701600627198808 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 29.06437329178164,
            "unit": "us/iter",
            "extra": "iterations: 25026\ncpu: 29.06187445057189 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 5.971402079721467,
            "unit": "us/iter",
            "extra": "iterations: 113092\ncpu: 5.970601147738254 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 5.049904747214665,
            "unit": "us/iter",
            "extra": "iterations: 139408\ncpu: 5.0489031189028175 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 8.252859421409864,
            "unit": "us/iter",
            "extra": "iterations: 76427\ncpu: 8.252887134128043 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 1.6308301767222808,
            "unit": "us/iter",
            "extra": "iterations: 465531\ncpu: 1.6306811769785485 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.7567664084246573,
            "unit": "us/iter",
            "extra": "iterations: 417438\ncpu: 1.756771970927421 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 8.370362300708674,
            "unit": "us/iter",
            "extra": "iterations: 90320\ncpu: 8.368807905225841 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 8.744346090246758,
            "unit": "us/iter",
            "extra": "iterations: 79826\ncpu: 8.741941673139149 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 43.26232044407483,
            "unit": "us/iter",
            "extra": "iterations: 15853\ncpu: 43.25633974642133 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 4.667824686549076,
            "unit": "us/iter",
            "extra": "iterations: 150981\ncpu: 4.667838582338296 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 21.770709087119265,
            "unit": "us/iter",
            "extra": "iterations: 28744\ncpu: 21.766651614250392 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 22.838777090093174,
            "unit": "us/iter",
            "extra": "iterations: 29891\ncpu: 22.836940483757704 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.5980629570324076,
            "unit": "us/iter",
            "extra": "iterations: 432819\ncpu: 1.5978741229012257 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 3.9956469166208564,
            "unit": "us/iter",
            "extra": "iterations: 177046\ncpu: 3.9950877003715544 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.8502117074555187,
            "unit": "us/iter",
            "extra": "iterations: 815002\ncpu: 0.8421971835651827 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.8400807050133352,
            "unit": "us/iter",
            "extra": "iterations: 806282\ncpu: 0.8398616352591411 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 27.57486077631444,
            "unit": "us/iter",
            "extra": "iterations: 24809\ncpu: 27.57438304647552 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.7520727877674684,
            "unit": "us/iter",
            "extra": "iterations: 404546\ncpu: 1.7516655757317867 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 23.142892837811644,
            "unit": "us/iter",
            "extra": "iterations: 29572\ncpu: 23.130338901663624 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.9075931449710503,
            "unit": "us/iter",
            "extra": "iterations: 834774\ncpu: 0.9074197758914531 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.9116024930829543,
            "unit": "us/iter",
            "extra": "iterations: 820109\ncpu: 0.9115547116297792 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 29.90558902536782,
            "unit": "us/iter",
            "extra": "iterations: 26133\ncpu: 29.901024030918627 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 9.2348819709549,
            "unit": "us/iter",
            "extra": "iterations: 70991\ncpu: 9.232090955191364 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 24.918238477153547,
            "unit": "us/iter",
            "extra": "iterations: 30548\ncpu: 24.914610547335492 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 28.73872891958094,
            "unit": "us/iter",
            "extra": "iterations: 24620\ncpu: 28.734923720552025 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 29.024498354738608,
            "unit": "us/iter",
            "extra": "iterations: 24920\ncpu: 29.02073619582719 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 5.848287701816959,
            "unit": "us/iter",
            "extra": "iterations: 120034\ncpu: 5.847667002682539 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 0.2134060843188076,
            "unit": "us/iter",
            "extra": "iterations: 2945605\ncpu: 0.21340109926482997 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 3.4087924061163735,
            "unit": "us/iter",
            "extra": "iterations: 218913\ncpu: 3.408085458606827 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.308077342006904,
            "unit": "us/iter",
            "extra": "iterations: 538000\ncpu: 1.308065384758343 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.447734914102536,
            "unit": "us/iter",
            "extra": "iterations: 453155\ncpu: 1.447404823956516 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 2.360003216244504,
            "unit": "us/iter",
            "extra": "iterations: 261485\ncpu: 2.359980235960011 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 4.19162714702046,
            "unit": "us/iter",
            "extra": "iterations: 183976\ncpu: 4.190409895855941 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 3.7833861316299555,
            "unit": "us/iter",
            "extra": "iterations: 187102\ncpu: 3.7830945206357356 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 2.7061272524281152,
            "unit": "us/iter",
            "extra": "iterations: 248121\ncpu: 2.705852112477355 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 4.491664932646951,
            "unit": "us/iter",
            "extra": "iterations: 161090\ncpu: 4.490871177602571 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 5.730849554676018,
            "unit": "us/iter",
            "extra": "iterations: 121373\ncpu: 5.729527217750228 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.3808640082544281,
            "unit": "us/iter",
            "extra": "iterations: 509803\ncpu: 1.3807158902556729 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 2.3128175747170028,
            "unit": "us/iter",
            "extra": "iterations: 307123\ncpu: 2.3120537048673477 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.8242944509324582,
            "unit": "us/iter",
            "extra": "iterations: 848593\ncpu: 0.8242321890470395 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.8468730942954986,
            "unit": "us/iter",
            "extra": "iterations: 840175\ncpu: 0.8467237444579956 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 3.4201637782819985,
            "unit": "us/iter",
            "extra": "iterations: 197169\ncpu: 3.4201741602382096 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.5552589896734947,
            "unit": "us/iter",
            "extra": "iterations: 463949\ncpu: 1.5550762195845191 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 4.1121593282035525,
            "unit": "us/iter",
            "extra": "iterations: 161001\ncpu: 4.111841690424309 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.8712545975303111,
            "unit": "us/iter",
            "extra": "iterations: 792545\ncpu: 0.8711202695115103 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.8819403337563798,
            "unit": "us/iter",
            "extra": "iterations: 845168\ncpu: 0.8817659483085278 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 2.2905564001248884,
            "unit": "us/iter",
            "extra": "iterations: 307455\ncpu: 2.29051430290611 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 2.1126254358064016,
            "unit": "us/iter",
            "extra": "iterations: 313786\ncpu: 2.1122242547468257 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 5.455019103052184,
            "unit": "us/iter",
            "extra": "iterations: 135214\ncpu: 5.454867706006875 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 3.5651817973314897,
            "unit": "us/iter",
            "extra": "iterations: 196202\ncpu: 3.5642038664234654 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 2.200353291418432,
            "unit": "us/iter",
            "extra": "iterations: 279302\ncpu: 2.200307509434246 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 2.899590136409796,
            "unit": "us/iter",
            "extra": "iterations: 239426\ncpu: 2.8986286368230263 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 0.22617337023290254,
            "unit": "us/iter",
            "extra": "iterations: 2968047\ncpu: 0.2261559109407589 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 3.188869519312064,
            "unit": "us/iter",
            "extra": "iterations: 212154\ncpu: 3.1876020626525787 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.2640139931191918,
            "unit": "us/iter",
            "extra": "iterations: 562991\ncpu: 1.264017838651077 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.3892965177348717,
            "unit": "us/iter",
            "extra": "iterations: 519834\ncpu: 1.3891186782703795 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 2.4169757333759243,
            "unit": "us/iter",
            "extra": "iterations: 287267\ncpu: 2.4168534429642095 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 4.11715921676983,
            "unit": "us/iter",
            "extra": "iterations: 181658\ncpu: 4.116351231434919 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 3.851369693911062,
            "unit": "us/iter",
            "extra": "iterations: 190206\ncpu: 3.851326956037046 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 2.669751168384684,
            "unit": "us/iter",
            "extra": "iterations: 254839\ncpu: 2.6692008797711866 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 4.435937173801158,
            "unit": "us/iter",
            "extra": "iterations: 153089\ncpu: 4.435746284840873 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 5.844223884269508,
            "unit": "us/iter",
            "extra": "iterations: 109704\ncpu: 5.842930166630369 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.4454386671050996,
            "unit": "us/iter",
            "extra": "iterations: 549811\ncpu: 1.4453817311767176 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 2.376528159064022,
            "unit": "us/iter",
            "extra": "iterations: 298696\ncpu: 2.3749586134397584 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.7795143568729043,
            "unit": "us/iter",
            "extra": "iterations: 943973\ncpu: 0.7793501773885567 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.9040427388460175,
            "unit": "us/iter",
            "extra": "iterations: 802338\ncpu: 0.9039291570385596 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 3.261681742224397,
            "unit": "us/iter",
            "extra": "iterations: 214829\ncpu: 3.2610092259424066 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.5620161093256497,
            "unit": "us/iter",
            "extra": "iterations: 504987\ncpu: 1.5617882895995598 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 4.236281592559772,
            "unit": "us/iter",
            "extra": "iterations: 162380\ncpu: 4.23573220224165 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.7825211689714276,
            "unit": "us/iter",
            "extra": "iterations: 765767\ncpu: 0.782505672090841 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.8199544973393739,
            "unit": "us/iter",
            "extra": "iterations: 776548\ncpu: 0.8196679007608009 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 2.074003986556822,
            "unit": "us/iter",
            "extra": "iterations: 335628\ncpu: 2.073985495846631 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 2.117823507445587,
            "unit": "us/iter",
            "extra": "iterations: 313322\ncpu: 2.1175251019717263 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 5.522823652394592,
            "unit": "us/iter",
            "extra": "iterations: 136316\ncpu: 5.522175900114394 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 3.475872727648834,
            "unit": "us/iter",
            "extra": "iterations: 192862\ncpu: 3.47516801650916 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 2.161932442688451,
            "unit": "us/iter",
            "extra": "iterations: 324110\ncpu: 2.161772737650833 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 2.9986806596508897,
            "unit": "us/iter",
            "extra": "iterations: 235094\ncpu: 2.998389767497238 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 0.22452085994679688,
            "unit": "us/iter",
            "extra": "iterations: 3185267\ncpu: 0.22450654529118125 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 3.2955793332505046,
            "unit": "us/iter",
            "extra": "iterations: 219183\ncpu: 3.2952061200002047 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.2929869778459073,
            "unit": "us/iter",
            "extra": "iterations: 522571\ncpu: 1.2928260733947938 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.504084351795186,
            "unit": "us/iter",
            "extra": "iterations: 500428\ncpu: 1.503861312716336 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 2.383747496716822,
            "unit": "us/iter",
            "extra": "iterations: 301604\ncpu: 2.383385790639399 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 3.9270545705412045,
            "unit": "us/iter",
            "extra": "iterations: 168131\ncpu: 3.926215837650404 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 3.6888011666669795,
            "unit": "us/iter",
            "extra": "iterations: 178114\ncpu: 3.6885719202309217 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 2.786340651414972,
            "unit": "us/iter",
            "extra": "iterations: 269014\ncpu: 2.785871891425685 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 4.676770362576209,
            "unit": "us/iter",
            "extra": "iterations: 154892\ncpu: 4.676687885752627 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 5.89473969160016,
            "unit": "us/iter",
            "extra": "iterations: 126523\ncpu: 5.8929059775692325 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.3962688221630233,
            "unit": "us/iter",
            "extra": "iterations: 481374\ncpu: 1.396008660625634 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 2.3397766459600335,
            "unit": "us/iter",
            "extra": "iterations: 311004\ncpu: 2.3395090706228445 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.77590668603947,
            "unit": "us/iter",
            "extra": "iterations: 862379\ncpu: 0.7758081841046879 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 1.0050081944066547,
            "unit": "us/iter",
            "extra": "iterations: 754295\ncpu: 1.0049905408361672 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 3.4325979196651852,
            "unit": "us/iter",
            "extra": "iterations: 200833\ncpu: 3.43158400262903 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.595584955452917,
            "unit": "us/iter",
            "extra": "iterations: 478592\ncpu: 1.595535082074066 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 3.936032279496308,
            "unit": "us/iter",
            "extra": "iterations: 176118\ncpu: 3.9352803972336146 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.8827049404167182,
            "unit": "us/iter",
            "extra": "iterations: 708928\ncpu: 0.8826974699828692 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.8715407819118818,
            "unit": "us/iter",
            "extra": "iterations: 853344\ncpu: 0.8713617181347969 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 2.3006822961214475,
            "unit": "us/iter",
            "extra": "iterations: 310994\ncpu: 2.300602095217308 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 2.020392686453357,
            "unit": "us/iter",
            "extra": "iterations: 347957\ncpu: 2.016012254387784 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 5.645068371469523,
            "unit": "us/iter",
            "extra": "iterations: 115282\ncpu: 5.644268298607001 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 3.540982927828505,
            "unit": "us/iter",
            "extra": "iterations: 182695\ncpu: 3.540302843537079 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 2.3935926108062877,
            "unit": "us/iter",
            "extra": "iterations: 280599\ncpu: 2.3934314520008306 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 2.8425491136891123,
            "unit": "us/iter",
            "extra": "iterations: 248220\ncpu: 2.8419864797356835 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 0.21309002524038276,
            "unit": "us/iter",
            "extra": "iterations: 3405245\ncpu: 0.21305945445923907 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 3.4015722875287526,
            "unit": "us/iter",
            "extra": "iterations: 225855\ncpu: 3.4010732815300244 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 1.3110737892559712,
            "unit": "us/iter",
            "extra": "iterations: 546028\ncpu: 1.3107998838887727 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.4839034778217604,
            "unit": "us/iter",
            "extra": "iterations: 473601\ncpu: 1.4838880534457914 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 2.5697238900012933,
            "unit": "us/iter",
            "extra": "iterations: 276915\ncpu: 2.569326172291071 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 3.9056739034932506,
            "unit": "us/iter",
            "extra": "iterations: 175261\ncpu: 3.9050033264671735 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 3.9492380630133312,
            "unit": "us/iter",
            "extra": "iterations: 178814\ncpu: 3.94833129956259 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 2.799980449169177,
            "unit": "us/iter",
            "extra": "iterations: 257943\ncpu: 2.7997133436456627 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 4.629528100294524,
            "unit": "us/iter",
            "extra": "iterations: 149002\ncpu: 4.629548536261252 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 6.303854074796237,
            "unit": "us/iter",
            "extra": "iterations: 101367\ncpu: 6.303012854282019 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.4621444416998945,
            "unit": "us/iter",
            "extra": "iterations: 489817\ncpu: 1.4617262344915796 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 2.350953273965325,
            "unit": "us/iter",
            "extra": "iterations: 289603\ncpu: 2.3336949479114275 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.794027320455141,
            "unit": "us/iter",
            "extra": "iterations: 815799\ncpu: 0.7937709031269018 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.8486361185925613,
            "unit": "us/iter",
            "extra": "iterations: 867376\ncpu: 0.848557109027676 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 3.4260932470615306,
            "unit": "us/iter",
            "extra": "iterations: 189014\ncpu: 3.4247050853376715 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.4678362991677172,
            "unit": "us/iter",
            "extra": "iterations: 423883\ncpu: 1.4678409608312133 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 4.123514334341463,
            "unit": "us/iter",
            "extra": "iterations: 154524\ncpu: 4.122932340607092 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.8876479626658434,
            "unit": "us/iter",
            "extra": "iterations: 830767\ncpu: 0.8875983374400015 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.8661776981503374,
            "unit": "us/iter",
            "extra": "iterations: 836953\ncpu: 0.8660871673797642 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 2.401518754533932,
            "unit": "us/iter",
            "extra": "iterations: 308832\ncpu: 2.401100646953668 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 2.0166047126329327,
            "unit": "us/iter",
            "extra": "iterations: 354494\ncpu: 2.0163705789096955 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 6.052364656977094,
            "unit": "us/iter",
            "extra": "iterations: 115706\ncpu: 6.051489568388812 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 3.4628230319837634,
            "unit": "us/iter",
            "extra": "iterations: 197013\ncpu: 3.4626440285666034 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 2.345597927283478,
            "unit": "us/iter",
            "extra": "iterations: 327493\ncpu: 2.345235812673917 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 2.962244234286376,
            "unit": "us/iter",
            "extra": "iterations: 249232\ncpu: 2.9621971576683377 us\nthreads: undefined"
          },
          {
            "name": "BM_SELECT_RANDOM_OBJECT/real_time",
            "value": 13.214595639471366,
            "unit": "ns/iter",
            "extra": "iterations: 55946682\ncpu: 13.21113874098911 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 52.23533427454342,
            "unit": "ns/iter",
            "extra": "iterations: 12347156\ncpu: 52.23361970966969 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 57.990553535382006,
            "unit": "ns/iter",
            "extra": "iterations: 10671929\ncpu: 57.97755438590556 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 70.16804774769889,
            "unit": "ns/iter",
            "extra": "iterations: 9341595\ncpu: 70.67824134957883 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 82.22262668896656,
            "unit": "ns/iter",
            "extra": "iterations: 8794844\ncpu: 82.22085144432603 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 89.54390549541003,
            "unit": "ns/iter",
            "extra": "iterations: 7776555\ncpu: 89.52223973211936 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 103.72101341536155,
            "unit": "ns/iter",
            "extra": "iterations: 6689103\ncpu: 103.7202191385071 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 128.17259639942463,
            "unit": "ns/iter",
            "extra": "iterations: 5463231\ncpu: 128.15656742319527 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 140.44061899968577,
            "unit": "ns/iter",
            "extra": "iterations: 4981004\ncpu: 140.42425683657407 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 158.1559631973137,
            "unit": "ns/iter",
            "extra": "iterations: 4437611\ncpu: 158.15167440318288 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 66.77477487000445,
            "unit": "ns/iter",
            "extra": "iterations: 10217097\ncpu: 66.76352774178355 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 74.89852410639114,
            "unit": "ns/iter",
            "extra": "iterations: 9363751\ncpu: 74.89772656278376 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 86.98397121365781,
            "unit": "ns/iter",
            "extra": "iterations: 8788064\ncpu: 86.96138671725748 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 92.16240325338143,
            "unit": "ns/iter",
            "extra": "iterations: 7600913\ncpu: 92.8396133464559 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 99.78089432112836,
            "unit": "ns/iter",
            "extra": "iterations: 6853355\ncpu: 99.77404818516 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 107.80750904994267,
            "unit": "ns/iter",
            "extra": "iterations: 6467982\ncpu: 107.78918834344788 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 124.84320305627276,
            "unit": "ns/iter",
            "extra": "iterations: 5789558\ncpu: 124.83657491643176 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 144.2537026371227,
            "unit": "ns/iter",
            "extra": "iterations: 4784968\ncpu: 144.22269908596465 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 163.72202788499263,
            "unit": "ns/iter",
            "extra": "iterations: 3858700\ncpu: 163.7058335709003 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 112.12875881844556,
            "unit": "ns/iter",
            "extra": "iterations: 6010998\ncpu: 112.1169401487146 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 208.31729027070324,
            "unit": "ns/iter",
            "extra": "iterations: 3717744\ncpu: 208.28484962923721 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 380.5804594660664,
            "unit": "ns/iter",
            "extra": "iterations: 1644213\ncpu: 380.52314268283146 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 817.9113208793609,
            "unit": "ns/iter",
            "extra": "iterations: 880974\ncpu: 817.810112443706 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 1783.5640206610326,
            "unit": "ns/iter",
            "extra": "iterations: 387578\ncpu: 1783.5372363756653 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 3747.094709302983,
            "unit": "ns/iter",
            "extra": "iterations: 175062\ncpu: 3746.537975117201 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 11049.71234249087,
            "unit": "ns/iter",
            "extra": "iterations: 58886\ncpu: 11049.309479333024 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 25539.8176697953,
            "unit": "ns/iter",
            "extra": "iterations: 24324\ncpu: 25530.492312120256 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 70276.67629999996,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 70269.48609999976 ns\nthreads: undefined"
          }
        ]
      }
    ]
  }
}