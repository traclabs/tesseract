window.BENCHMARK_DATA = {
  "lastUpdate": 1593553324532,
  "repoUrl": "https://github.com/ros-industrial-consortium/tesseract",
  "entries": {
    "C++ Benchmark": [
      {
        "commit": {
          "author": {
            "email": "pbeeson@traclabs.com",
            "name": "Patrick Beeson"
          },
          "committer": {
            "email": "levi.armstrong@gmail.com",
            "name": "Levi Armstrong",
            "username": "Levi-Armstrong"
          },
          "distinct": true,
          "id": "b11446ea131811aa851c6ac100f44becc60f282e",
          "message": "Bugfix when OMPL simplifies down to two states and trajopt was assuming > 2, so segfaulting",
          "timestamp": "2020-06-30T14:21:09-05:00",
          "tree_id": "5a82146f9da1087337551ac4db5988dbeb5ed98b",
          "url": "https://github.com/ros-industrial-consortium/tesseract/commit/b11446ea131811aa851c6ac100f44becc60f282e"
        },
        "date": 1593548352939,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_0/real_time",
            "value": 80.17351041536331,
            "unit": "us/iter",
            "extra": "iterations: 8017\ncpu: 80.15788050392916 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 81.79118925836008,
            "unit": "us/iter",
            "extra": "iterations: 7820\ncpu: 81.76368772378515 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 84.16953501806275,
            "unit": "us/iter",
            "extra": "iterations: 8310\ncpu: 84.1412022864019 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 88.05034116622302,
            "unit": "us/iter",
            "extra": "iterations: 6894\ncpu: 88.04922033652447 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 90.65811396488604,
            "unit": "us/iter",
            "extra": "iterations: 7748\ncpu: 90.64599832214768 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 107.34979871246777,
            "unit": "us/iter",
            "extra": "iterations: 6369\ncpu: 107.32031464908148 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 151.04822656084485,
            "unit": "us/iter",
            "extra": "iterations: 4661\ncpu: 151.04124973181717 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 256.9472691186704,
            "unit": "us/iter",
            "extra": "iterations: 2746\ncpu: 256.8474289876185 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 555.2199002232161,
            "unit": "us/iter",
            "extra": "iterations: 1343\ncpu: 555.1462546537606 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 1698.5171191589163,
            "unit": "us/iter",
            "extra": "iterations: 428\ncpu: 1698.1171845794402 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 4.444568326906305,
            "unit": "us/iter",
            "extra": "iterations: 151946\ncpu: 4.444109644215708 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 6.937512324417155,
            "unit": "us/iter",
            "extra": "iterations: 103372\ncpu: 6.93574925511744 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 44.91244312479367,
            "unit": "us/iter",
            "extra": "iterations: 15745\ncpu: 44.76234436328989 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 24.408562857237705,
            "unit": "us/iter",
            "extra": "iterations: 29217\ncpu: 24.399257829345895 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 5.040213580000454,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.040142480000007 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 6.9542144416706355,
            "unit": "us/iter",
            "extra": "iterations: 101678\ncpu: 6.953663663722745 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 4.9743670339650095,
            "unit": "us/iter",
            "extra": "iterations: 140848\ncpu: 4.973701444109965 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 77.99405006446331,
            "unit": "us/iter",
            "extra": "iterations: 9308\ncpu: 77.99236398796748 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 75.75321215420769,
            "unit": "us/iter",
            "extra": "iterations: 9182\ncpu: 75.73118351121762 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 5.562827676075083,
            "unit": "us/iter",
            "extra": "iterations: 127771\ncpu: 5.561986734078948 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 44.1816374620459,
            "unit": "us/iter",
            "extra": "iterations: 15808\ncpu: 44.167283147773375 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 76.01410266517154,
            "unit": "us/iter",
            "extra": "iterations: 9643\ncpu: 76.01464637560933 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.5715717829932728,
            "unit": "us/iter",
            "extra": "iterations: 1233398\ncpu: 0.5714333102534628 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.6338344722532747,
            "unit": "us/iter",
            "extra": "iterations: 1130457\ncpu: 0.6337497799562476 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 13.086849394763613,
            "unit": "us/iter",
            "extra": "iterations: 51220\ncpu: 13.086573467395574 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 27.408711304607507,
            "unit": "us/iter",
            "extra": "iterations: 26069\ncpu: 27.40315562545557 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 74.99724882987162,
            "unit": "us/iter",
            "extra": "iterations: 9187\ncpu: 74.99627604223338 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.6040571317827123,
            "unit": "us/iter",
            "extra": "iterations: 1168684\ncpu: 0.6039299451348698 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.6231545824423803,
            "unit": "us/iter",
            "extra": "iterations: 1141902\ncpu: 0.623061120831735 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 78.88396661120152,
            "unit": "us/iter",
            "extra": "iterations: 9015\ncpu: 78.87826189683865 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 5.839744710505114,
            "unit": "us/iter",
            "extra": "iterations: 122696\ncpu: 5.838534744408935 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 5.507509969654901,
            "unit": "us/iter",
            "extra": "iterations: 125882\ncpu: 5.5075383613225055 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 13.485933364005106,
            "unit": "us/iter",
            "extra": "iterations: 45651\ncpu: 13.483448905829011 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 77.97942953317208,
            "unit": "us/iter",
            "extra": "iterations: 9061\ncpu: 77.96741871758073 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 4.506515699886734,
            "unit": "us/iter",
            "extra": "iterations: 155447\ncpu: 4.505533808950978 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 4.474165869127976,
            "unit": "us/iter",
            "extra": "iterations: 159240\ncpu: 4.474189958553152 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 6.845239210936429,
            "unit": "us/iter",
            "extra": "iterations: 103971\ncpu: 6.843697348299041 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 43.69953034708768,
            "unit": "us/iter",
            "extra": "iterations: 16163\ncpu: 43.69707121202729 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 23.910479321098038,
            "unit": "us/iter",
            "extra": "iterations: 28870\ncpu: 23.904180290959477 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 5.022514389997923,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.022009970000028 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 6.783155932172527,
            "unit": "us/iter",
            "extra": "iterations: 101666\ncpu: 6.782968514547609 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 4.809610610921564,
            "unit": "us/iter",
            "extra": "iterations: 144945\ncpu: 4.80861713063575 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 75.81487824522185,
            "unit": "us/iter",
            "extra": "iterations: 9437\ncpu: 75.80913447070054 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 75.5522261568881,
            "unit": "us/iter",
            "extra": "iterations: 9206\ncpu: 75.52285509450304 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 5.5320048591857045,
            "unit": "us/iter",
            "extra": "iterations: 130063\ncpu: 5.531866495467552 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 45.14700783188732,
            "unit": "us/iter",
            "extra": "iterations: 15322\ncpu: 45.12826582691533 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 73.587422189427,
            "unit": "us/iter",
            "extra": "iterations: 9491\ncpu: 73.58178653461195 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.5130001210109327,
            "unit": "us/iter",
            "extra": "iterations: 1380043\ncpu: 0.5128905048610798 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.5700856104928864,
            "unit": "us/iter",
            "extra": "iterations: 1257451\ncpu: 0.5699801773587956 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 12.861687615519745,
            "unit": "us/iter",
            "extra": "iterations: 55723\ncpu: 12.861469411194603 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 26.91099763575922,
            "unit": "us/iter",
            "extra": "iterations: 26224\ncpu: 26.903651998169604 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 80.15621900337904,
            "unit": "us/iter",
            "extra": "iterations: 9251\ncpu: 80.15189190357752 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.5540550985824864,
            "unit": "us/iter",
            "extra": "iterations: 1274570\ncpu: 0.5539704614105159 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.5546217538969804,
            "unit": "us/iter",
            "extra": "iterations: 1265171\ncpu: 0.5545101784659907 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 78.33253412725357,
            "unit": "us/iter",
            "extra": "iterations: 9069\ncpu: 78.33033928768293 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 5.71604439100048,
            "unit": "us/iter",
            "extra": "iterations: 125566\ncpu: 5.714440071356882 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 5.486830909995964,
            "unit": "us/iter",
            "extra": "iterations: 120220\ncpu: 5.485342197637681 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 13.16092569343172,
            "unit": "us/iter",
            "extra": "iterations: 52889\ncpu: 13.157998544120787 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 78.31548199663764,
            "unit": "us/iter",
            "extra": "iterations: 8915\ncpu: 78.2943997756597 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 4.44325055059395,
            "unit": "us/iter",
            "extra": "iterations: 159828\ncpu: 4.441981179768271 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 4.389215472585487,
            "unit": "us/iter",
            "extra": "iterations: 159844\ncpu: 4.388982995921019 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 6.705952344960582,
            "unit": "us/iter",
            "extra": "iterations: 104522\ncpu: 6.704747125007167 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 43.41730152247816,
            "unit": "us/iter",
            "extra": "iterations: 16158\ncpu: 43.41399269711636 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 24.281286859721558,
            "unit": "us/iter",
            "extra": "iterations: 27937\ncpu: 24.276512474496343 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 4.969728631034251,
            "unit": "us/iter",
            "extra": "iterations: 140683\ncpu: 4.957329371708056 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 6.881451491012583,
            "unit": "us/iter",
            "extra": "iterations: 102950\ncpu: 6.880467537639672 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 4.946635008614336,
            "unit": "us/iter",
            "extra": "iterations: 139280\ncpu: 4.945347357840327 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 77.79929086185135,
            "unit": "us/iter",
            "extra": "iterations: 8853\ncpu: 77.79825663616865 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 78.30171321157921,
            "unit": "us/iter",
            "extra": "iterations: 9310\ncpu: 78.26596960257763 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 5.581980863807,
            "unit": "us/iter",
            "extra": "iterations: 121393\ncpu: 5.581636914813906 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 47.23370089086546,
            "unit": "us/iter",
            "extra": "iterations: 15603\ncpu: 47.21316650644131 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 74.8185594085834,
            "unit": "us/iter",
            "extra": "iterations: 9401\ncpu: 74.81909977662039 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.5773654446023622,
            "unit": "us/iter",
            "extra": "iterations: 1245461\ncpu: 0.5772743337607487 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.6077930557842144,
            "unit": "us/iter",
            "extra": "iterations: 1136543\ncpu: 0.6049226047760579 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 12.884288002350072,
            "unit": "us/iter",
            "extra": "iterations: 54319\ncpu: 12.883102450339706 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 27.319084082015223,
            "unit": "us/iter",
            "extra": "iterations: 26046\ncpu: 27.31158108730723 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 75.68752941177682,
            "unit": "us/iter",
            "extra": "iterations: 9401\ncpu: 75.68810647803403 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.6311864111405452,
            "unit": "us/iter",
            "extra": "iterations: 1099430\ncpu: 0.6310530347543765 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.6123100511035339,
            "unit": "us/iter",
            "extra": "iterations: 933788\ncpu: 0.6122482201527573 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 80.36095347527954,
            "unit": "us/iter",
            "extra": "iterations: 8877\ncpu: 80.25963557508106 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 5.605096106364485,
            "unit": "us/iter",
            "extra": "iterations: 117859\ncpu: 5.602380301886117 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 5.661784746174464,
            "unit": "us/iter",
            "extra": "iterations: 123510\ncpu: 5.640202874261129 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 13.434003913900002,
            "unit": "us/iter",
            "extra": "iterations: 50589\ncpu: 13.430507857439354 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 78.25888860704774,
            "unit": "us/iter",
            "extra": "iterations: 9067\ncpu: 78.24334267122647 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 4.486893693540835,
            "unit": "us/iter",
            "extra": "iterations: 154873\ncpu: 4.486198285046488 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 4.533694471274083,
            "unit": "us/iter",
            "extra": "iterations: 155298\ncpu: 4.533374763358187 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 6.810971865131858,
            "unit": "us/iter",
            "extra": "iterations: 98170\ncpu: 6.810176530508232 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 43.66548300056242,
            "unit": "us/iter",
            "extra": "iterations: 15677\ncpu: 43.664878293040694 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 24.067174540725976,
            "unit": "us/iter",
            "extra": "iterations: 29231\ncpu: 24.063797475282968 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 4.979026761348778,
            "unit": "us/iter",
            "extra": "iterations: 139978\ncpu: 4.977722084899032 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 6.817138107439885,
            "unit": "us/iter",
            "extra": "iterations: 103014\ncpu: 6.817059642378704 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 4.870045591044111,
            "unit": "us/iter",
            "extra": "iterations: 140861\ncpu: 4.868933267547392 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 78.2885148768297,
            "unit": "us/iter",
            "extra": "iterations: 9377\ncpu: 78.2824967473601 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 77.37005239382141,
            "unit": "us/iter",
            "extra": "iterations: 8856\ncpu: 77.3453998419147 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 5.637092597611902,
            "unit": "us/iter",
            "extra": "iterations: 125500\ncpu: 5.637133880477984 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 44.95698207745123,
            "unit": "us/iter",
            "extra": "iterations: 15567\ncpu: 44.942939487377785 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 73.44027590109044,
            "unit": "us/iter",
            "extra": "iterations: 7963\ncpu: 73.43503315333399 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.5707004550871592,
            "unit": "us/iter",
            "extra": "iterations: 1250310\ncpu: 0.5706946589245854 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.623558633186615,
            "unit": "us/iter",
            "extra": "iterations: 1162763\ncpu: 0.6233901156125586 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 12.867978165685976,
            "unit": "us/iter",
            "extra": "iterations: 51616\ncpu: 12.868053607408694 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 27.877248261050422,
            "unit": "us/iter",
            "extra": "iterations: 25590\ncpu: 27.869171355998052 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 79.51201704728376,
            "unit": "us/iter",
            "extra": "iterations: 9327\ncpu: 79.50703227189902 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.6022703570960201,
            "unit": "us/iter",
            "extra": "iterations: 1159829\ncpu: 0.6021374495723014 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.6390815257462215,
            "unit": "us/iter",
            "extra": "iterations: 1163706\ncpu: 0.6389642383901163 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 80.33232700615817,
            "unit": "us/iter",
            "extra": "iterations: 8798\ncpu: 80.33064560127345 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 5.670022032380721,
            "unit": "us/iter",
            "extra": "iterations: 122910\ncpu: 5.6682257505492135 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 5.435055993117838,
            "unit": "us/iter",
            "extra": "iterations: 128998\ncpu: 5.434742468875447 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 13.313659299939543,
            "unit": "us/iter",
            "extra": "iterations: 53167\ncpu: 13.311824477589475 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 79.2614961618911,
            "unit": "us/iter",
            "extra": "iterations: 8598\ncpu: 79.23856082809974 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 4.5060474616973405,
            "unit": "us/iter",
            "extra": "iterations: 150711\ncpu: 4.50530261891957 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 4.636428395445346,
            "unit": "us/iter",
            "extra": "iterations: 144495\ncpu: 4.636141956469081 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 7.81678348201945,
            "unit": "us/iter",
            "extra": "iterations: 90459\ncpu: 7.815679777578717 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.4514306490944002,
            "unit": "us/iter",
            "extra": "iterations: 487910\ncpu: 1.451036463692067 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.689264785522624,
            "unit": "us/iter",
            "extra": "iterations: 420276\ncpu: 1.6892497263702715 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 7.415818250382428,
            "unit": "us/iter",
            "extra": "iterations: 95461\ncpu: 7.412837588124991 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 8.24762175244911,
            "unit": "us/iter",
            "extra": "iterations: 85526\ncpu: 8.247020122535844 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 44.90765143737031,
            "unit": "us/iter",
            "extra": "iterations: 15584\ncpu: 44.88834573921954 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 4.387041992928268,
            "unit": "us/iter",
            "extra": "iterations: 154145\ncpu: 4.386987647993762 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 21.49615292740575,
            "unit": "us/iter",
            "extra": "iterations: 32486\ncpu: 21.488827125530985 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 23.995424076890693,
            "unit": "us/iter",
            "extra": "iterations: 28193\ncpu: 23.995117263150732 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.580481635832188,
            "unit": "us/iter",
            "extra": "iterations: 437918\ncpu: 1.5798425161788046 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 4.107034091169035,
            "unit": "us/iter",
            "extra": "iterations: 174796\ncpu: 4.106986183894329 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.8013756498309335,
            "unit": "us/iter",
            "extra": "iterations: 890039\ncpu: 0.8010931947925788 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.8250379439891817,
            "unit": "us/iter",
            "extra": "iterations: 835521\ncpu: 0.824988765093878 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 26.54618187934668,
            "unit": "us/iter",
            "extra": "iterations: 26754\ncpu: 26.539662742019964 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.8129342313125116,
            "unit": "us/iter",
            "extra": "iterations: 387388\ncpu: 1.8127889067291432 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 21.827955551567033,
            "unit": "us/iter",
            "extra": "iterations: 33477\ncpu: 21.48911503420247 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.8794944425919229,
            "unit": "us/iter",
            "extra": "iterations: 797854\ncpu: 0.8561971137576704 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.8188307808762266,
            "unit": "us/iter",
            "extra": "iterations: 858715\ncpu: 0.8187669296565272 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 27.057500382230355,
            "unit": "us/iter",
            "extra": "iterations: 26162\ncpu: 27.05106306857268 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 8.523538398479657,
            "unit": "us/iter",
            "extra": "iterations: 84170\ncpu: 8.523174515860752 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 25.05116628381471,
            "unit": "us/iter",
            "extra": "iterations: 29167\ncpu: 25.04195080056213 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 29.0114060517484,
            "unit": "us/iter",
            "extra": "iterations: 23960\ncpu: 29.01099720367299 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 27.91100966978655,
            "unit": "us/iter",
            "extra": "iterations: 24923\ncpu: 27.90292260161316 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 5.516527135365373,
            "unit": "us/iter",
            "extra": "iterations: 125482\ncpu: 5.516155432651712 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 4.623503986050495,
            "unit": "us/iter",
            "extra": "iterations: 154288\ncpu: 4.621690468474532 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 7.775661935659413,
            "unit": "us/iter",
            "extra": "iterations: 89551\ncpu: 7.77521008140613 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.4244141437624915,
            "unit": "us/iter",
            "extra": "iterations: 494635\ncpu: 1.4240033398364336 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.6508946140980991,
            "unit": "us/iter",
            "extra": "iterations: 427505\ncpu: 1.650531748166675 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 7.3754575647667755,
            "unit": "us/iter",
            "extra": "iterations: 97584\ncpu: 7.374623729299905 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 8.181756699159312,
            "unit": "us/iter",
            "extra": "iterations: 84936\ncpu: 8.179403492041045 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 46.60015359813486,
            "unit": "us/iter",
            "extra": "iterations: 15508\ncpu: 46.59623684549848 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 4.450094530264504,
            "unit": "us/iter",
            "extra": "iterations: 157759\ncpu: 4.449515558541787 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 21.704272912746568,
            "unit": "us/iter",
            "extra": "iterations: 31369\ncpu: 21.701708310752938 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 24.551247594484916,
            "unit": "us/iter",
            "extra": "iterations: 28684\ncpu: 24.54399769906601 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.55043544108097,
            "unit": "us/iter",
            "extra": "iterations: 461741\ncpu: 1.550400287174019 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 4.034599348592681,
            "unit": "us/iter",
            "extra": "iterations: 173163\ncpu: 4.022810750564602 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.7750587860874317,
            "unit": "us/iter",
            "extra": "iterations: 908072\ncpu: 0.7750255453312078 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.8020326406648339,
            "unit": "us/iter",
            "extra": "iterations: 875840\ncpu: 0.8017118606138162 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 26.210275643888366,
            "unit": "us/iter",
            "extra": "iterations: 26868\ncpu: 26.20653863331812 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.8078059106990447,
            "unit": "us/iter",
            "extra": "iterations: 396163\ncpu: 1.8071352221181751 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 20.80423586836855,
            "unit": "us/iter",
            "extra": "iterations: 33701\ncpu: 20.803023649149896 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.8358136710638566,
            "unit": "us/iter",
            "extra": "iterations: 861396\ncpu: 0.8356933059823863 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.797302147145168,
            "unit": "us/iter",
            "extra": "iterations: 881822\ncpu: 0.7970872817870396 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 27.175404256129514,
            "unit": "us/iter",
            "extra": "iterations: 26221\ncpu: 27.17160196026115 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 8.327379985208687,
            "unit": "us/iter",
            "extra": "iterations: 82469\ncpu: 8.325211388521497 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 23.740008527976574,
            "unit": "us/iter",
            "extra": "iterations: 29198\ncpu: 23.739075073635526 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 29.880253862398728,
            "unit": "us/iter",
            "extra": "iterations: 24143\ncpu: 29.87369254028178 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 27.94115843406515,
            "unit": "us/iter",
            "extra": "iterations: 24982\ncpu: 27.94092918901662 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 5.479741102432101,
            "unit": "us/iter",
            "extra": "iterations: 129024\ncpu: 5.477563577318836 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 4.640025132741568,
            "unit": "us/iter",
            "extra": "iterations: 150481\ncpu: 4.639359998936614 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 7.8650489765785245,
            "unit": "us/iter",
            "extra": "iterations: 90676\ncpu: 7.862280404958483 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.4812198898574218,
            "unit": "us/iter",
            "extra": "iterations: 457952\ncpu: 1.481077187128775 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.7075239510065003,
            "unit": "us/iter",
            "extra": "iterations: 423406\ncpu: 1.7071879543511086 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 7.32078461990833,
            "unit": "us/iter",
            "extra": "iterations: 95162\ncpu: 7.319791513419415 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 8.245050157148677,
            "unit": "us/iter",
            "extra": "iterations: 84953\ncpu: 8.244749155415525 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 44.484231770819804,
            "unit": "us/iter",
            "extra": "iterations: 15744\ncpu: 44.47749580792664 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 4.4340667023480185,
            "unit": "us/iter",
            "extra": "iterations: 160684\ncpu: 4.432571058723911 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 21.351766144388197,
            "unit": "us/iter",
            "extra": "iterations: 32550\ncpu: 21.35146617511547 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 24.144579480749464,
            "unit": "us/iter",
            "extra": "iterations: 29504\ncpu: 24.141180755151566 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.5720286022813126,
            "unit": "us/iter",
            "extra": "iterations: 412100\ncpu: 1.5715436544527595 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 4.016923872904835,
            "unit": "us/iter",
            "extra": "iterations: 175207\ncpu: 4.016217673951422 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.7845538380039327,
            "unit": "us/iter",
            "extra": "iterations: 894749\ncpu: 0.7843436505656971 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.8319694843619462,
            "unit": "us/iter",
            "extra": "iterations: 839930\ncpu: 0.8319369245055946 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 26.69734064394299,
            "unit": "us/iter",
            "extra": "iterations: 26400\ncpu: 26.69168344696949 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.8087123313938067,
            "unit": "us/iter",
            "extra": "iterations: 354672\ncpu: 1.8086864032119332 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 21.01904395173567,
            "unit": "us/iter",
            "extra": "iterations: 33150\ncpu: 21.011724705881793 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.8321118148833772,
            "unit": "us/iter",
            "extra": "iterations: 843707\ncpu: 0.8320630870669764 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.8164452957305169,
            "unit": "us/iter",
            "extra": "iterations: 852566\ncpu: 0.8162417173568003 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 26.874644956774034,
            "unit": "us/iter",
            "extra": "iterations: 26025\ncpu: 26.873134409220935 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 8.241227863807694,
            "unit": "us/iter",
            "extra": "iterations: 85437\ncpu: 8.241141238573347 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 23.57968623551105,
            "unit": "us/iter",
            "extra": "iterations: 29162\ncpu: 23.574421233112396 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 29.64627570555991,
            "unit": "us/iter",
            "extra": "iterations: 24236\ncpu: 29.645193472519935 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 28.365926276473836,
            "unit": "us/iter",
            "extra": "iterations: 24090\ncpu: 28.358030386051976 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 5.729436984463805,
            "unit": "us/iter",
            "extra": "iterations: 125112\ncpu: 5.729378860540982 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 4.782138612147714,
            "unit": "us/iter",
            "extra": "iterations: 150160\ncpu: 4.780784017048414 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 8.036768538726895,
            "unit": "us/iter",
            "extra": "iterations: 82921\ncpu: 8.036656407906214 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 1.482030130120497,
            "unit": "us/iter",
            "extra": "iterations: 490008\ncpu: 1.4815515787497098 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.6731767716878896,
            "unit": "us/iter",
            "extra": "iterations: 411825\ncpu: 1.6728367801858006 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 7.386693458294219,
            "unit": "us/iter",
            "extra": "iterations: 96137\ncpu: 7.384861208483558 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 8.577573257571787,
            "unit": "us/iter",
            "extra": "iterations: 83418\ncpu: 8.575921084178473 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 46.071294650868985,
            "unit": "us/iter",
            "extra": "iterations: 15554\ncpu: 46.064602545968604 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 4.408255437814497,
            "unit": "us/iter",
            "extra": "iterations: 159577\ncpu: 4.4078748691854654 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 21.566378055650034,
            "unit": "us/iter",
            "extra": "iterations: 31990\ncpu: 21.56069671772452 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 23.997764945987065,
            "unit": "us/iter",
            "extra": "iterations: 29155\ncpu: 23.997899399760207 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.591890151185313,
            "unit": "us/iter",
            "extra": "iterations: 448653\ncpu: 1.591661121178282 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 3.970959799342197,
            "unit": "us/iter",
            "extra": "iterations: 174425\ncpu: 3.9706521255553575 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.7958488153717516,
            "unit": "us/iter",
            "extra": "iterations: 892432\ncpu: 0.7957542950051187 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.8475989772966395,
            "unit": "us/iter",
            "extra": "iterations: 857727\ncpu: 0.8473818604287828 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 27.17158404100278,
            "unit": "us/iter",
            "extra": "iterations: 26142\ncpu: 27.15735207711803 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.8678681189981265,
            "unit": "us/iter",
            "extra": "iterations: 380813\ncpu: 1.867375811750145 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 21.239650845924423,
            "unit": "us/iter",
            "extra": "iterations: 33395\ncpu: 21.23917044467732 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.8532988146061571,
            "unit": "us/iter",
            "extra": "iterations: 832466\ncpu: 0.8530192236079374 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.8521081796173113,
            "unit": "us/iter",
            "extra": "iterations: 815246\ncpu: 0.8520408784587636 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 27.386756454375373,
            "unit": "us/iter",
            "extra": "iterations: 25564\ncpu: 27.37855758097334 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 8.497969183390904,
            "unit": "us/iter",
            "extra": "iterations: 84435\ncpu: 8.497446426245022 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 23.965256118888313,
            "unit": "us/iter",
            "extra": "iterations: 29744\ncpu: 23.962279619418727 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 29.753357323864602,
            "unit": "us/iter",
            "extra": "iterations: 23676\ncpu: 29.753561285689898 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 27.880007857507458,
            "unit": "us/iter",
            "extra": "iterations: 24817\ncpu: 27.87577547648788 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 5.547571428571798,
            "unit": "us/iter",
            "extra": "iterations: 124782\ncpu: 5.546798785081283 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 0.2269293198967588,
            "unit": "us/iter",
            "extra": "iterations: 3230980\ncpu: 0.22688497019480836 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 3.3268414245986535,
            "unit": "us/iter",
            "extra": "iterations: 219290\ncpu: 3.3157006475443627 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.2715859042843376,
            "unit": "us/iter",
            "extra": "iterations: 561433\ncpu: 1.2715311390673523 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.4868303214935845,
            "unit": "us/iter",
            "extra": "iterations: 492390\ncpu: 1.4864229838136114 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 2.3666761886301373,
            "unit": "us/iter",
            "extra": "iterations: 294162\ncpu: 2.3666391410175964 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 3.7805820839116335,
            "unit": "us/iter",
            "extra": "iterations: 182618\ncpu: 3.7798086935570487 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 3.7672204014875583,
            "unit": "us/iter",
            "extra": "iterations: 189545\ncpu: 3.7668537761481087 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 2.6252824059000064,
            "unit": "us/iter",
            "extra": "iterations: 260809\ncpu: 2.6245960952267313 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 4.5146411663335115,
            "unit": "us/iter",
            "extra": "iterations: 157279\ncpu: 4.514058577432457 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 5.649792133639652,
            "unit": "us/iter",
            "extra": "iterations: 122420\ncpu: 5.648207359908525 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.3558726282073925,
            "unit": "us/iter",
            "extra": "iterations: 521968\ncpu: 1.3558260199858818 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 2.233242243323705,
            "unit": "us/iter",
            "extra": "iterations: 313214\ncpu: 2.2327728230539416 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.7840085811328703,
            "unit": "us/iter",
            "extra": "iterations: 907689\ncpu: 0.7839997212701806 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.8297340459726892,
            "unit": "us/iter",
            "extra": "iterations: 846150\ncpu: 0.8295610281864942 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 3.4890356481137914,
            "unit": "us/iter",
            "extra": "iterations: 204555\ncpu: 3.4889509374006464 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.6218694744065996,
            "unit": "us/iter",
            "extra": "iterations: 443346\ncpu: 1.621508280214519 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 3.9672717037148644,
            "unit": "us/iter",
            "extra": "iterations: 173104\ncpu: 3.9672052234494863 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.8502050237734575,
            "unit": "us/iter",
            "extra": "iterations: 836025\ncpu: 0.8501015926557254 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.8111932843464196,
            "unit": "us/iter",
            "extra": "iterations: 790690\ncpu: 0.811033908358521 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 2.2543858225905575,
            "unit": "us/iter",
            "extra": "iterations: 310762\ncpu: 2.2543093010085156 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 2.004676618770592,
            "unit": "us/iter",
            "extra": "iterations: 345756\ncpu: 2.0041511152373803 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 5.362793355625133,
            "unit": "us/iter",
            "extra": "iterations: 127988\ncpu: 5.36266914867025 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 3.4372334766859063,
            "unit": "us/iter",
            "extra": "iterations: 196949\ncpu: 3.436123275568765 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 2.3112013786743018,
            "unit": "us/iter",
            "extra": "iterations: 307977\ncpu: 2.3111080665114807 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 2.8687608512620275,
            "unit": "us/iter",
            "extra": "iterations: 239926\ncpu: 2.8681443653460144 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 0.21560807820807343,
            "unit": "us/iter",
            "extra": "iterations: 3273523\ncpu: 0.21560531268605682 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 3.2248689216971456,
            "unit": "us/iter",
            "extra": "iterations: 214986\ncpu: 3.22369441265942 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.2736771032319096,
            "unit": "us/iter",
            "extra": "iterations: 554908\ncpu: 1.2736575378260515 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.4570458789705503,
            "unit": "us/iter",
            "extra": "iterations: 456767\ncpu: 1.4568068555740556 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 2.384856754710096,
            "unit": "us/iter",
            "extra": "iterations: 297015\ncpu: 2.3846778411864253 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 3.891855435181595,
            "unit": "us/iter",
            "extra": "iterations: 179442\ncpu: 3.8944749501231906 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 3.6716168351897296,
            "unit": "us/iter",
            "extra": "iterations: 191171\ncpu: 3.671565844191862 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 2.6255350252679155,
            "unit": "us/iter",
            "extra": "iterations: 270105\ncpu: 2.6208655337738835 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 4.404713140965839,
            "unit": "us/iter",
            "extra": "iterations: 158862\ncpu: 4.404455042741577 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 5.642259240157322,
            "unit": "us/iter",
            "extra": "iterations: 124078\ncpu: 5.641011541127187 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.3365693239456247,
            "unit": "us/iter",
            "extra": "iterations: 503924\ncpu: 1.3364353176272559 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 2.2254290250272932,
            "unit": "us/iter",
            "extra": "iterations: 315886\ncpu: 2.2250890226220887 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.7532559449277113,
            "unit": "us/iter",
            "extra": "iterations: 927219\ncpu: 0.7531061151680423 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.8049353258399002,
            "unit": "us/iter",
            "extra": "iterations: 866714\ncpu: 0.8049250260178344 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 3.336860534281299,
            "unit": "us/iter",
            "extra": "iterations: 208130\ncpu: 3.3361274828231564 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.5197229930776506,
            "unit": "us/iter",
            "extra": "iterations: 443303\ncpu: 1.519666742611714 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 4.059299458368159,
            "unit": "us/iter",
            "extra": "iterations: 178165\ncpu: 4.058242774955906 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.82819928292566,
            "unit": "us/iter",
            "extra": "iterations: 846495\ncpu: 0.8281911718320932 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.8207993251692658,
            "unit": "us/iter",
            "extra": "iterations: 859475\ncpu: 0.8204754460571785 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 2.250482604892273,
            "unit": "us/iter",
            "extra": "iterations: 310892\ncpu: 2.2502811072655513 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 1.9972408162907533,
            "unit": "us/iter",
            "extra": "iterations: 348797\ncpu: 1.996087816122282 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 5.347546643906719,
            "unit": "us/iter",
            "extra": "iterations: 132997\ncpu: 5.346191500560308 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 3.474518896664601,
            "unit": "us/iter",
            "extra": "iterations: 205486\ncpu: 3.4740965029247186 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 2.221828583644413,
            "unit": "us/iter",
            "extra": "iterations: 318056\ncpu: 2.221446094398463 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 2.9041957209038016,
            "unit": "us/iter",
            "extra": "iterations: 240705\ncpu: 2.9036744936748624 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 0.21657935800098085,
            "unit": "us/iter",
            "extra": "iterations: 3268385\ncpu: 0.21655316524828047 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 3.1599750068946646,
            "unit": "us/iter",
            "extra": "iterations: 221221\ncpu: 3.159487887677968 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.28396884195113,
            "unit": "us/iter",
            "extra": "iterations: 550901\ncpu: 1.2837421551240256 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.49804881507315,
            "unit": "us/iter",
            "extra": "iterations: 459100\ncpu: 1.4979736811152105 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 2.404619035551252,
            "unit": "us/iter",
            "extra": "iterations: 288061\ncpu: 2.4038130673711104 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 3.8482113394187727,
            "unit": "us/iter",
            "extra": "iterations: 176517\ncpu: 3.848243619594761 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 3.847869912427837,
            "unit": "us/iter",
            "extra": "iterations: 180194\ncpu: 3.843513973828127 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 2.6977598703538765,
            "unit": "us/iter",
            "extra": "iterations: 263795\ncpu: 2.6948658958660654 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 4.475155065213163,
            "unit": "us/iter",
            "extra": "iterations: 153271\ncpu: 4.4743664815914945 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 5.733580352287079,
            "unit": "us/iter",
            "extra": "iterations: 123251\ncpu: 5.731547192314879 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.3843604840281494,
            "unit": "us/iter",
            "extra": "iterations: 507243\ncpu: 1.3837699918973922 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 2.2642294027176715,
            "unit": "us/iter",
            "extra": "iterations: 312080\ncpu: 2.2638754614201297 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.7877333615323383,
            "unit": "us/iter",
            "extra": "iterations: 903103\ncpu: 0.7874649303567813 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.8351019028316341,
            "unit": "us/iter",
            "extra": "iterations: 822038\ncpu: 0.8350463920159417 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 3.426232856109221,
            "unit": "us/iter",
            "extra": "iterations: 200115\ncpu: 3.4248440146914594 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.548957904485306,
            "unit": "us/iter",
            "extra": "iterations: 453540\ncpu: 1.5488445980508647 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 3.949872370059918,
            "unit": "us/iter",
            "extra": "iterations: 178046\ncpu: 3.948629573256347 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.8481490580474885,
            "unit": "us/iter",
            "extra": "iterations: 845637\ncpu: 0.8480883405054267 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.8242642759570676,
            "unit": "us/iter",
            "extra": "iterations: 852132\ncpu: 0.8240847533011213 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 2.394937637521406,
            "unit": "us/iter",
            "extra": "iterations: 310860\ncpu: 2.394724876150055 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 2.005322613239132,
            "unit": "us/iter",
            "extra": "iterations: 352329\ncpu: 2.004917500404524 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 5.606059147849769,
            "unit": "us/iter",
            "extra": "iterations: 133310\ncpu: 5.601198604755646 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 3.466151578149655,
            "unit": "us/iter",
            "extra": "iterations: 203466\ncpu: 3.4661769976308356 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 2.256425300950312,
            "unit": "us/iter",
            "extra": "iterations: 312842\ncpu: 2.256084720082316 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 2.907865734573839,
            "unit": "us/iter",
            "extra": "iterations: 240248\ncpu: 2.9074028337385527 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 0.2185587283732977,
            "unit": "us/iter",
            "extra": "iterations: 3232458\ncpu: 0.21851624460394384 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 3.18423759890029,
            "unit": "us/iter",
            "extra": "iterations: 219033\ncpu: 3.1842542813183177 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 1.3069019464219997,
            "unit": "us/iter",
            "extra": "iterations: 536523\ncpu: 1.306654998946879 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.4642593893093019,
            "unit": "us/iter",
            "extra": "iterations: 486990\ncpu: 1.4641654366619028 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 2.394928815355,
            "unit": "us/iter",
            "extra": "iterations: 294586\ncpu: 2.394126390935209 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 3.869182906875241,
            "unit": "us/iter",
            "extra": "iterations: 182120\ncpu: 3.8692090379968334 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 3.787795225613473,
            "unit": "us/iter",
            "extra": "iterations: 187333\ncpu: 3.7585924690258556 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 2.665483885871347,
            "unit": "us/iter",
            "extra": "iterations: 264054\ncpu: 2.665378028736347 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 4.441657650408243,
            "unit": "us/iter",
            "extra": "iterations: 155312\ncpu: 4.440792688266064 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 5.806361677164478,
            "unit": "us/iter",
            "extra": "iterations: 122731\ncpu: 5.8063462287441805 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.3996316518000051,
            "unit": "us/iter",
            "extra": "iterations: 496313\ncpu: 1.3991757076683393 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 2.323741530053458,
            "unit": "us/iter",
            "extra": "iterations: 306643\ncpu: 2.323572910518062 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.823856628990287,
            "unit": "us/iter",
            "extra": "iterations: 824560\ncpu: 0.8237498144464878 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.8571196973625281,
            "unit": "us/iter",
            "extra": "iterations: 828715\ncpu: 0.8570123914735771 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 3.3776431898251946,
            "unit": "us/iter",
            "extra": "iterations: 202682\ncpu: 3.3771513306557903 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.568347750123615,
            "unit": "us/iter",
            "extra": "iterations: 443580\ncpu: 1.5681056945760579 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 3.964358997149022,
            "unit": "us/iter",
            "extra": "iterations: 177773\ncpu: 3.9638770566960866 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.8799863277474187,
            "unit": "us/iter",
            "extra": "iterations: 806012\ncpu: 0.879880460836767 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.8620087662934499,
            "unit": "us/iter",
            "extra": "iterations: 827944\ncpu: 0.8620151556143861 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 2.294475606448662,
            "unit": "us/iter",
            "extra": "iterations: 306085\ncpu: 2.2940874168941443 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 1.9801409214396855,
            "unit": "us/iter",
            "extra": "iterations: 357050\ncpu: 1.980066455678516 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 5.6657486951867995,
            "unit": "us/iter",
            "extra": "iterations: 132011\ncpu: 5.664312277007504 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 3.4626040200357373,
            "unit": "us/iter",
            "extra": "iterations: 201043\ncpu: 3.462624756892852 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 2.2981998182639525,
            "unit": "us/iter",
            "extra": "iterations: 303736\ncpu: 2.297524129507194 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 3.00309765353842,
            "unit": "us/iter",
            "extra": "iterations: 228983\ncpu: 3.00300107868282 us\nthreads: undefined"
          },
          {
            "name": "BM_SELECT_RANDOM_OBJECT/real_time",
            "value": 12.33249025605085,
            "unit": "ns/iter",
            "extra": "iterations: 54983097\ncpu: 12.326656208542671 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 49.126512435765086,
            "unit": "ns/iter",
            "extra": "iterations: 14057622\ncpu: 49.125587528246086 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 59.513292932535784,
            "unit": "ns/iter",
            "extra": "iterations: 11778477\ncpu: 59.500330985067826 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 68.89168108561411,
            "unit": "ns/iter",
            "extra": "iterations: 10433044\ncpu: 68.89100180158165 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 78.60251714083958,
            "unit": "ns/iter",
            "extra": "iterations: 8850359\ncpu: 78.59087399731216 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 87.31079161192335,
            "unit": "ns/iter",
            "extra": "iterations: 8086753\ncpu: 87.28569167378107 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 105.43075702429523,
            "unit": "ns/iter",
            "extra": "iterations: 6624477\ncpu: 105.42274416531288 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 118.33101930860903,
            "unit": "ns/iter",
            "extra": "iterations: 5882968\ncpu: 118.30706745302614 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 139.39626496280584,
            "unit": "ns/iter",
            "extra": "iterations: 5060137\ncpu: 139.38771558952067 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 163.23148102175827,
            "unit": "ns/iter",
            "extra": "iterations: 4028732\ncpu: 163.2080252545997 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 64.44619580148367,
            "unit": "ns/iter",
            "extra": "iterations: 11124643\ncpu: 64.4298795026528 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 72.20597189830708,
            "unit": "ns/iter",
            "extra": "iterations: 9847455\ncpu: 72.20434386346473 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 85.43960626273893,
            "unit": "ns/iter",
            "extra": "iterations: 8374519\ncpu: 85.41248757092623 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 91.779554550893,
            "unit": "ns/iter",
            "extra": "iterations: 7673649\ncpu: 91.77850355156819 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 101.70245210030816,
            "unit": "ns/iter",
            "extra": "iterations: 6876513\ncpu: 101.68906173811861 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 115.66908907591112,
            "unit": "ns/iter",
            "extra": "iterations: 5829871\ncpu: 115.64577672472565 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 137.4272213022654,
            "unit": "ns/iter",
            "extra": "iterations: 5006939\ncpu: 137.42811985526475 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 149.14840375676724,
            "unit": "ns/iter",
            "extra": "iterations: 4622228\ncpu: 149.1392174942563 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 177.4453099529239,
            "unit": "ns/iter",
            "extra": "iterations: 4051825\ncpu: 177.43008175328987 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 104.33975611041824,
            "unit": "ns/iter",
            "extra": "iterations: 6753465\ncpu: 104.32179792150961 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 188.33386436745766,
            "unit": "ns/iter",
            "extra": "iterations: 3775024\ncpu: 188.32916373512634 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 349.69149802083837,
            "unit": "ns/iter",
            "extra": "iterations: 1990266\ncpu: 349.64517255483213 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 724.6037310103535,
            "unit": "ns/iter",
            "extra": "iterations: 951056\ncpu: 724.5800478626248 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 1612.1612266605814,
            "unit": "ns/iter",
            "extra": "iterations: 408915\ncpu: 1611.9129892521066 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 3493.9342170124764,
            "unit": "ns/iter",
            "extra": "iterations: 198790\ncpu: 3493.366436943528 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 10013.954948222015,
            "unit": "ns/iter",
            "extra": "iterations: 73582\ncpu: 10013.400573510133 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 26613.16955294109,
            "unit": "ns/iter",
            "extra": "iterations: 25119\ncpu: 26608.659421154684 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 61760.536500014496,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61757.30130000261 ns\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "levi.armstrong@gmail.com",
            "name": "Levi Armstrong",
            "username": "Levi-Armstrong"
          },
          "committer": {
            "email": "levi.armstrong@gmail.com",
            "name": "Levi Armstrong",
            "username": "Levi-Armstrong"
          },
          "distinct": true,
          "id": "e1ad046c3272f12e72765283e178b37e5021cfae",
          "message": "Improve descartes collision edge evaluator unit run time",
          "timestamp": "2020-06-30T15:02:07-05:00",
          "tree_id": "ceaf8fdcf273fc9d107a0ae95fbae26a45723a39",
          "url": "https://github.com/ros-industrial-consortium/tesseract/commit/e1ad046c3272f12e72765283e178b37e5021cfae"
        },
        "date": 1593550527839,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_0/real_time",
            "value": 79.84602552710061,
            "unit": "us/iter",
            "extra": "iterations: 8775\ncpu: 79.83407156695156 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 85.35088363041135,
            "unit": "us/iter",
            "extra": "iterations: 7966\ncpu: 85.34592317348731 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 82.88850721626021,
            "unit": "us/iter",
            "extra": "iterations: 8176\ncpu: 82.85503522504892 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 85.5768116898647,
            "unit": "us/iter",
            "extra": "iterations: 8332\ncpu: 85.55685033605377 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 96.35148772876381,
            "unit": "us/iter",
            "extra": "iterations: 7049\ncpu: 96.35075500070931 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 113.97501664556184,
            "unit": "us/iter",
            "extra": "iterations: 6308\ncpu: 113.97420434369062 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 165.7363624624989,
            "unit": "us/iter",
            "extra": "iterations: 4337\ncpu: 165.70545238644212 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 277.4557447999541,
            "unit": "us/iter",
            "extra": "iterations: 2500\ncpu: 277.4196140000001 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 562.9331898549224,
            "unit": "us/iter",
            "extra": "iterations: 1380\ncpu: 562.7562898550725 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 1510.571356274992,
            "unit": "us/iter",
            "extra": "iterations: 494\ncpu: 1510.223230769231 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 4.41021460253089,
            "unit": "us/iter",
            "extra": "iterations: 174504\ncpu: 4.409737581946547 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 6.632575265363772,
            "unit": "us/iter",
            "extra": "iterations: 99674\ncpu: 6.647445121094771 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 37.20762831244514,
            "unit": "us/iter",
            "extra": "iterations: 18755\ncpu: 37.20167880565174 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 19.89107207041001,
            "unit": "us/iter",
            "extra": "iterations: 32607\ncpu: 19.891141656699453 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 4.7215086113990825,
            "unit": "us/iter",
            "extra": "iterations: 145679\ncpu: 4.720784114388482 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 6.553843713454481,
            "unit": "us/iter",
            "extra": "iterations: 94058\ncpu: 6.553300357226404 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 4.686778438212929,
            "unit": "us/iter",
            "extra": "iterations: 156462\ncpu: 4.685894312996134 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 65.89998462282537,
            "unit": "us/iter",
            "extra": "iterations: 10340\ncpu: 65.90091450676981 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 60.70329471527805,
            "unit": "us/iter",
            "extra": "iterations: 11713\ncpu: 60.687523179373436 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 5.016794424575389,
            "unit": "us/iter",
            "extra": "iterations: 135595\ncpu: 5.0167186990670825 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 35.0769757518462,
            "unit": "us/iter",
            "extra": "iterations: 19053\ncpu: 35.06896583215239 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 58.49849912787841,
            "unit": "us/iter",
            "extra": "iterations: 10320\ncpu: 58.48675978682154 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.5235315819331632,
            "unit": "us/iter",
            "extra": "iterations: 1191694\ncpu: 0.5235336437038371 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.5932845427225496,
            "unit": "us/iter",
            "extra": "iterations: 1305094\ncpu: 0.5930539378772712 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 10.980983265644362,
            "unit": "us/iter",
            "extra": "iterations: 63283\ncpu: 10.981025441271749 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 24.0117195274171,
            "unit": "us/iter",
            "extra": "iterations: 29625\ncpu: 24.0094783122363 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 64.03748823970535,
            "unit": "us/iter",
            "extra": "iterations: 10714\ncpu: 64.02937110322934 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.6012614787048804,
            "unit": "us/iter",
            "extra": "iterations: 1272857\ncpu: 0.6012546853260017 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.6015791401601244,
            "unit": "us/iter",
            "extra": "iterations: 1190268\ncpu: 0.6014113392950179 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 66.38456974858055,
            "unit": "us/iter",
            "extra": "iterations: 9864\ncpu: 66.38479531630149 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 5.5687997178089805,
            "unit": "us/iter",
            "extra": "iterations: 123321\ncpu: 5.568235718166411 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 5.573507059269104,
            "unit": "us/iter",
            "extra": "iterations: 129121\ncpu: 5.572354040008973 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 14.177807547925717,
            "unit": "us/iter",
            "extra": "iterations: 49815\ncpu: 14.177889792231241 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 70.8587243027967,
            "unit": "us/iter",
            "extra": "iterations: 10040\ncpu: 70.84274780876511 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 4.616921806234883,
            "unit": "us/iter",
            "extra": "iterations: 151099\ncpu: 4.61660921647397 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 3.924612439482028,
            "unit": "us/iter",
            "extra": "iterations: 169171\ncpu: 3.9237075385261106 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 5.883597566691985,
            "unit": "us/iter",
            "extra": "iterations: 123700\ncpu: 5.883407696038784 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 36.22523661061892,
            "unit": "us/iter",
            "extra": "iterations: 20464\ncpu: 36.2155589327601 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 19.05169024065119,
            "unit": "us/iter",
            "extra": "iterations: 36693\ncpu: 19.05044270024257 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 4.471016586212152,
            "unit": "us/iter",
            "extra": "iterations: 160133\ncpu: 4.469813910936525 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 6.103518075328195,
            "unit": "us/iter",
            "extra": "iterations: 126858\ncpu: 6.10325153321039 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 4.299955123579114,
            "unit": "us/iter",
            "extra": "iterations: 159371\ncpu: 4.298784785186755 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 59.05418018837483,
            "unit": "us/iter",
            "extra": "iterations: 12104\ncpu: 59.049953403833605 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 58.90510396189367,
            "unit": "us/iter",
            "extra": "iterations: 13226\ncpu: 58.89200703160426 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 5.045713449999312,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.04573637 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 37.79107627337164,
            "unit": "us/iter",
            "extra": "iterations: 19417\ncpu: 37.789692228459636 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 60.27358196248919,
            "unit": "us/iter",
            "extra": "iterations: 12097\ncpu: 60.26458336777715 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.46653623587398846,
            "unit": "us/iter",
            "extra": "iterations: 1511044\ncpu: 0.46645426010096597 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.4936904883072349,
            "unit": "us/iter",
            "extra": "iterations: 1349991\ncpu: 0.493642265763255 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 11.115562525870889,
            "unit": "us/iter",
            "extra": "iterations: 62822\ncpu: 11.114755244977836 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 22.987892005881275,
            "unit": "us/iter",
            "extra": "iterations: 30585\ncpu: 22.98269364067366 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 62.002574860562,
            "unit": "us/iter",
            "extra": "iterations: 11655\ncpu: 62.00184882024904 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.488161612351658,
            "unit": "us/iter",
            "extra": "iterations: 1463502\ncpu: 0.48805837573163896 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.5236294935633329,
            "unit": "us/iter",
            "extra": "iterations: 1379501\ncpu: 0.5236256204236166 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 64.79799486821221,
            "unit": "us/iter",
            "extra": "iterations: 11497\ncpu: 64.78552718100327 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 5.129373007932155,
            "unit": "us/iter",
            "extra": "iterations: 137922\ncpu: 5.129079073679302 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 4.627917029264508,
            "unit": "us/iter",
            "extra": "iterations: 144099\ncpu: 4.627283992255317 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 11.902900745894181,
            "unit": "us/iter",
            "extra": "iterations: 60330\ncpu: 11.902366683242178 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 57.54133610129984,
            "unit": "us/iter",
            "extra": "iterations: 12163\ncpu: 57.54152363726027 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 3.7080422701943223,
            "unit": "us/iter",
            "extra": "iterations: 179914\ncpu: 3.707845831897464 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 4.0164229007378065,
            "unit": "us/iter",
            "extra": "iterations: 183374\ncpu: 4.0159962208382884 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 5.692813301754055,
            "unit": "us/iter",
            "extra": "iterations: 122856\ncpu: 5.692080476330029 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 34.79999612681089,
            "unit": "us/iter",
            "extra": "iterations: 20913\ncpu: 34.80009697317475 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 18.984439530833225,
            "unit": "us/iter",
            "extra": "iterations: 34530\ncpu: 18.98249446857808 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 4.330264376126753,
            "unit": "us/iter",
            "extra": "iterations: 153501\ncpu: 4.32975946736503 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 5.9750957797441675,
            "unit": "us/iter",
            "extra": "iterations: 118334\ncpu: 5.973676491963422 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 4.232287031860402,
            "unit": "us/iter",
            "extra": "iterations: 162745\ncpu: 4.232298700420889 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 58.977191937296006,
            "unit": "us/iter",
            "extra": "iterations: 12254\ncpu: 58.96591300799787 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 57.103584016226975,
            "unit": "us/iter",
            "extra": "iterations: 13301\ncpu: 57.10297481392372 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 4.865787113340197,
            "unit": "us/iter",
            "extra": "iterations: 148774\ncpu: 4.864928670332148 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 36.836472036876536,
            "unit": "us/iter",
            "extra": "iterations: 18882\ncpu: 36.83661047558524 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 56.843945592752206,
            "unit": "us/iter",
            "extra": "iterations: 12627\ncpu: 56.83397624138745 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.4838576056044737,
            "unit": "us/iter",
            "extra": "iterations: 1327475\ncpu: 0.48385947004651686 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.5401799534025714,
            "unit": "us/iter",
            "extra": "iterations: 1277753\ncpu: 0.5401596505740955 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 10.604779886726797,
            "unit": "us/iter",
            "extra": "iterations: 61800\ncpu: 10.603570080906197 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 21.461901440345173,
            "unit": "us/iter",
            "extra": "iterations: 31798\ncpu: 21.46024564438035 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 55.86495874962061,
            "unit": "us/iter",
            "extra": "iterations: 13212\ncpu: 55.84557394792608 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.5159403141239345,
            "unit": "us/iter",
            "extra": "iterations: 1283570\ncpu: 0.5159427027742878 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.4929892651136575,
            "unit": "us/iter",
            "extra": "iterations: 1372348\ncpu: 0.49296582863821603 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 60.8730937780534,
            "unit": "us/iter",
            "extra": "iterations: 12263\ncpu: 60.860946587294386 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 4.7275656999502305,
            "unit": "us/iter",
            "extra": "iterations: 149475\ncpu: 4.727507569827771 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 4.708919182803332,
            "unit": "us/iter",
            "extra": "iterations: 148508\ncpu: 4.70876548738113 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 11.940015780396333,
            "unit": "us/iter",
            "extra": "iterations: 62039\ncpu: 11.938653830654939 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 58.64771721485589,
            "unit": "us/iter",
            "extra": "iterations: 11949\ncpu: 58.64075629759783 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 3.819327293181041,
            "unit": "us/iter",
            "extra": "iterations: 167104\ncpu: 3.819341733291836 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 3.945368689607296,
            "unit": "us/iter",
            "extra": "iterations: 173246\ncpu: 3.945347442365159 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 6.204389934062806,
            "unit": "us/iter",
            "extra": "iterations: 117843\ncpu: 6.203293050923656 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 40.76452676728315,
            "unit": "us/iter",
            "extra": "iterations: 18885\ncpu: 40.764272332538894 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 21.36329380208859,
            "unit": "us/iter",
            "extra": "iterations: 32995\ncpu: 21.363369177148105 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 5.10667974020236,
            "unit": "us/iter",
            "extra": "iterations: 135643\ncpu: 5.1059668099348885 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 6.175751468886745,
            "unit": "us/iter",
            "extra": "iterations: 104671\ncpu: 6.175258935139546 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 4.628437117131302,
            "unit": "us/iter",
            "extra": "iterations: 154263\ncpu: 4.627403466806681 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 63.76937079358621,
            "unit": "us/iter",
            "extra": "iterations: 11114\ncpu: 63.769739247795265 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 58.57900068057527,
            "unit": "us/iter",
            "extra": "iterations: 11755\ncpu: 58.56779089748977 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 5.00138436999805,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.000863620000047 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 38.18281957465414,
            "unit": "us/iter",
            "extra": "iterations: 18667\ncpu: 38.17973745111723 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 61.918107956991804,
            "unit": "us/iter",
            "extra": "iterations: 11625\ncpu: 61.901692645161326 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.5469031663102548,
            "unit": "us/iter",
            "extra": "iterations: 1202567\ncpu: 0.5468704754080305 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.568479771610478,
            "unit": "us/iter",
            "extra": "iterations: 1309694\ncpu: 0.5683872393093342 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 11.412497566844024,
            "unit": "us/iter",
            "extra": "iterations: 59799\ncpu: 11.411866134885129 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 21.410700856568603,
            "unit": "us/iter",
            "extra": "iterations: 32105\ncpu: 21.409690297461278 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 60.05730239401595,
            "unit": "us/iter",
            "extra": "iterations: 12573\ncpu: 60.04265545215955 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.5450831815743507,
            "unit": "us/iter",
            "extra": "iterations: 1284383\ncpu: 0.5450766321260834 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.5508141270555726,
            "unit": "us/iter",
            "extra": "iterations: 1202402\ncpu: 0.5507076901069696 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 68.30803075462629,
            "unit": "us/iter",
            "extra": "iterations: 10535\ncpu: 68.30724148077833 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 5.351875514449735,
            "unit": "us/iter",
            "extra": "iterations: 130722\ncpu: 5.351590742185772 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 5.229519408587244,
            "unit": "us/iter",
            "extra": "iterations: 133240\ncpu: 5.2276575052536955 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 12.540487428700166,
            "unit": "us/iter",
            "extra": "iterations: 53296\ncpu: 12.539790078054477 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 62.43343778875653,
            "unit": "us/iter",
            "extra": "iterations: 12120\ncpu: 62.42415041254221 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 4.059001937553057,
            "unit": "us/iter",
            "extra": "iterations: 179608\ncpu: 4.059013312324596 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 4.296554052171406,
            "unit": "us/iter",
            "extra": "iterations: 172278\ncpu: 4.2957485865868 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 7.164751189489195,
            "unit": "us/iter",
            "extra": "iterations: 100253\ncpu: 7.164783178558332 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.2301237020879676,
            "unit": "us/iter",
            "extra": "iterations: 574962\ncpu: 1.229891084976048 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.3167844394227353,
            "unit": "us/iter",
            "extra": "iterations: 544260\ncpu: 1.3167772516811702 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 6.110075291097867,
            "unit": "us/iter",
            "extra": "iterations: 106666\ncpu: 6.109761807886307 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 7.130866150925548,
            "unit": "us/iter",
            "extra": "iterations: 104446\ncpu: 7.1290994772418115 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 35.81432760523942,
            "unit": "us/iter",
            "extra": "iterations: 19029\ncpu: 35.81445383362205 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 3.3109671501056477,
            "unit": "us/iter",
            "extra": "iterations: 191751\ncpu: 3.3105053950175343 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 17.23454080174511,
            "unit": "us/iter",
            "extra": "iterations: 38491\ncpu: 17.231548284014465 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 18.98918715124181,
            "unit": "us/iter",
            "extra": "iterations: 34229\ncpu: 18.969442314995792 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.3007227944315383,
            "unit": "us/iter",
            "extra": "iterations: 490690\ncpu: 1.2967171472823964 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 3.4491100104742887,
            "unit": "us/iter",
            "extra": "iterations: 216743\ncpu: 3.4479660565739465 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.6983119030112211,
            "unit": "us/iter",
            "extra": "iterations: 950709\ncpu: 0.6983034977054018 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.6701237214360471,
            "unit": "us/iter",
            "extra": "iterations: 986458\ncpu: 0.6700641122075066 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 19.831774404427293,
            "unit": "us/iter",
            "extra": "iterations: 33959\ncpu: 19.827716776112666 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.4899313573858746,
            "unit": "us/iter",
            "extra": "iterations: 519852\ncpu: 1.4899364511437772 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 16.846524451110543,
            "unit": "us/iter",
            "extra": "iterations: 44681\ncpu: 16.84385933618336 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.7684653515328793,
            "unit": "us/iter",
            "extra": "iterations: 934962\ncpu: 0.7684594550366675 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.6864330616121259,
            "unit": "us/iter",
            "extra": "iterations: 933433\ncpu: 0.6863966819257532 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 24.78222861281961,
            "unit": "us/iter",
            "extra": "iterations: 33139\ncpu: 24.781961676574475 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 6.928198073626769,
            "unit": "us/iter",
            "extra": "iterations: 101538\ncpu: 6.928149323405972 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 17.32899144437925,
            "unit": "us/iter",
            "extra": "iterations: 38688\ncpu: 17.326132935277005 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 24.908545540192495,
            "unit": "us/iter",
            "extra": "iterations: 30786\ncpu: 24.907067108425917 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 22.783155725799176,
            "unit": "us/iter",
            "extra": "iterations: 32371\ncpu: 22.779406227796336 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 4.531760691644879,
            "unit": "us/iter",
            "extra": "iterations: 144178\ncpu: 4.531773966902016 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 3.812243106988745,
            "unit": "us/iter",
            "extra": "iterations: 176338\ncpu: 3.8122565527566636 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 7.3328859518880805,
            "unit": "us/iter",
            "extra": "iterations: 94276\ncpu: 7.332785353642482 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.1357593604645975,
            "unit": "us/iter",
            "extra": "iterations: 597246\ncpu: 1.1354669633618242 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.3134061771285221,
            "unit": "us/iter",
            "extra": "iterations: 541190\ncpu: 1.3134106173432818 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 6.964297767186649,
            "unit": "us/iter",
            "extra": "iterations: 107846\ncpu: 6.962608905290889 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 7.755372633791534,
            "unit": "us/iter",
            "extra": "iterations: 89278\ncpu: 7.755401857120479 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 37.90322433996702,
            "unit": "us/iter",
            "extra": "iterations: 19203\ncpu: 37.90038941831968 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 3.818567323392854,
            "unit": "us/iter",
            "extra": "iterations: 186176\ncpu: 3.8179713980320793 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 17.710873002211496,
            "unit": "us/iter",
            "extra": "iterations: 40670\ncpu: 17.707560093435458 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 19.681312669389648,
            "unit": "us/iter",
            "extra": "iterations: 35053\ncpu: 19.68034927110335 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.3551797944582127,
            "unit": "us/iter",
            "extra": "iterations: 495082\ncpu: 1.3551035586024347 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 3.2695852046911047,
            "unit": "us/iter",
            "extra": "iterations: 209607\ncpu: 3.269483881740653 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.6230061359457975,
            "unit": "us/iter",
            "extra": "iterations: 1105616\ncpu: 0.6230081285003104 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.6526222147483924,
            "unit": "us/iter",
            "extra": "iterations: 1114980\ncpu: 0.6524469972555429 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 21.227133151404416,
            "unit": "us/iter",
            "extra": "iterations: 31881\ncpu: 21.22489586273984 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.427115779845975,
            "unit": "us/iter",
            "extra": "iterations: 497470\ncpu: 1.4268259271915782 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 16.461971062530544,
            "unit": "us/iter",
            "extra": "iterations: 40432\ncpu: 16.462033018401392 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.6678094941047298,
            "unit": "us/iter",
            "extra": "iterations: 981072\ncpu: 0.6678123012378112 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.6580625537916497,
            "unit": "us/iter",
            "extra": "iterations: 865607\ncpu: 0.6579445972594705 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 21.446924140194614,
            "unit": "us/iter",
            "extra": "iterations: 30385\ncpu: 21.44538311666952 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 6.9592534678302735,
            "unit": "us/iter",
            "extra": "iterations: 102009\ncpu: 6.95781682988757 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 18.59652499276145,
            "unit": "us/iter",
            "extra": "iterations: 37991\ncpu: 18.59639685715063 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 22.723586539774935,
            "unit": "us/iter",
            "extra": "iterations: 29212\ncpu: 22.720601910173887 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 21.54335756352927,
            "unit": "us/iter",
            "extra": "iterations: 30733\ncpu: 21.54204916539237 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 4.740316734477183,
            "unit": "us/iter",
            "extra": "iterations: 149930\ncpu: 4.739443860468224 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 4.227261049156085,
            "unit": "us/iter",
            "extra": "iterations: 165352\ncpu: 4.227364083893879 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 6.955494624319242,
            "unit": "us/iter",
            "extra": "iterations: 97383\ncpu: 6.954546337656507 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.1662461983938806,
            "unit": "us/iter",
            "extra": "iterations: 605402\ncpu: 1.1662517682465605 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.3560998454882478,
            "unit": "us/iter",
            "extra": "iterations: 565003\ncpu: 1.3560105822446897 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 6.204187049662249,
            "unit": "us/iter",
            "extra": "iterations: 113248\ncpu: 6.20253902055652 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 7.174992687088571,
            "unit": "us/iter",
            "extra": "iterations: 104883\ncpu: 7.174674227472516 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 36.6003726459444,
            "unit": "us/iter",
            "extra": "iterations: 20231\ncpu: 36.5914514359152 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 3.4709505194160277,
            "unit": "us/iter",
            "extra": "iterations: 196663\ncpu: 3.4706888738603867 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 16.88234970479394,
            "unit": "us/iter",
            "extra": "iterations: 37769\ncpu: 16.877477508009058 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 18.109793230316182,
            "unit": "us/iter",
            "extra": "iterations: 38052\ncpu: 18.109855171869835 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.3401594500322171,
            "unit": "us/iter",
            "extra": "iterations: 571088\ncpu: 1.339993582425129 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 3.2304901026993025,
            "unit": "us/iter",
            "extra": "iterations: 217332\ncpu: 3.2300444895367266 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.6589724357404217,
            "unit": "us/iter",
            "extra": "iterations: 978840\ncpu: 0.6588009204772979 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.6706125338984241,
            "unit": "us/iter",
            "extra": "iterations: 1120258\ncpu: 0.6705796334415924 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 20.926177196316115,
            "unit": "us/iter",
            "extra": "iterations: 29504\ncpu: 20.92603853714761 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.3691021697498778,
            "unit": "us/iter",
            "extra": "iterations: 523286\ncpu: 1.36888964352192 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 16.73346435391401,
            "unit": "us/iter",
            "extra": "iterations: 43988\ncpu: 16.72994459852708 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.6790059878521155,
            "unit": "us/iter",
            "extra": "iterations: 905333\ncpu: 0.6788635109954194 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.6630220226443011,
            "unit": "us/iter",
            "extra": "iterations: 1090968\ncpu: 0.6629517932698304 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 21.98570532455715,
            "unit": "us/iter",
            "extra": "iterations: 33430\ncpu: 21.984785462159042 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 6.755403432405148,
            "unit": "us/iter",
            "extra": "iterations: 104300\ncpu: 6.75476859060388 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 18.05816611694268,
            "unit": "us/iter",
            "extra": "iterations: 40020\ncpu: 18.057211644178388 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 25.815590676903216,
            "unit": "us/iter",
            "extra": "iterations: 29561\ncpu: 25.81084486316475 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 22.785194148937144,
            "unit": "us/iter",
            "extra": "iterations: 28200\ncpu: 22.785278510638065 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 5.190241050198667,
            "unit": "us/iter",
            "extra": "iterations: 146791\ncpu: 5.189731523049759 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 4.277088441577333,
            "unit": "us/iter",
            "extra": "iterations: 171096\ncpu: 4.276219034927763 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 6.795113084596392,
            "unit": "us/iter",
            "extra": "iterations: 100668\ncpu: 6.794502880756529 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 1.2599392701355054,
            "unit": "us/iter",
            "extra": "iterations: 585972\ncpu: 1.2598354409425565 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.2924090646635527,
            "unit": "us/iter",
            "extra": "iterations: 559403\ncpu: 1.292084994181296 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 6.213840972105852,
            "unit": "us/iter",
            "extra": "iterations: 108918\ncpu: 6.2135416919149735 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 7.804582071723102,
            "unit": "us/iter",
            "extra": "iterations: 95447\ncpu: 7.803086791622544 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 36.21451499299778,
            "unit": "us/iter",
            "extra": "iterations: 19309\ncpu: 36.214612149775775 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 3.416314714845836,
            "unit": "us/iter",
            "extra": "iterations: 216917\ncpu: 3.4156719344265167 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 16.1916135573326,
            "unit": "us/iter",
            "extra": "iterations: 44286\ncpu: 16.190664589261047 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 18.081298443357237,
            "unit": "us/iter",
            "extra": "iterations: 38416\ncpu: 18.078950020824767 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.3477075508732421,
            "unit": "us/iter",
            "extra": "iterations: 540070\ncpu: 1.3478736145314378 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 3.523612439840504,
            "unit": "us/iter",
            "extra": "iterations: 204456\ncpu: 3.5233189194740966 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.651143958755014,
            "unit": "us/iter",
            "extra": "iterations: 991145\ncpu: 0.6511460734806853 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.6430692808973115,
            "unit": "us/iter",
            "extra": "iterations: 1160724\ncpu: 0.6430249094530784 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 21.45912411764156,
            "unit": "us/iter",
            "extra": "iterations: 34000\ncpu: 21.453436176470323 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.4497329070232545,
            "unit": "us/iter",
            "extra": "iterations: 482903\ncpu: 1.4497365764967574 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 16.44691402788154,
            "unit": "us/iter",
            "extra": "iterations: 43328\ncpu: 16.44203868168356 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.669633703647087,
            "unit": "us/iter",
            "extra": "iterations: 909949\ncpu: 0.6696357631031885 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.6888820857482902,
            "unit": "us/iter",
            "extra": "iterations: 1135554\ncpu: 0.6888624054866586 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 20.87077870389216,
            "unit": "us/iter",
            "extra": "iterations: 29874\ncpu: 20.868459931712795 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 7.212934081244859,
            "unit": "us/iter",
            "extra": "iterations: 94753\ncpu: 7.212892816058503 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 17.77439142541277,
            "unit": "us/iter",
            "extra": "iterations: 36270\ncpu: 17.771361593603356 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 24.270090968991305,
            "unit": "us/iter",
            "extra": "iterations: 30351\ncpu: 24.270188362821663 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 24.205608929202302,
            "unit": "us/iter",
            "extra": "iterations: 30529\ncpu: 24.200528743162145 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 5.195665045756157,
            "unit": "us/iter",
            "extra": "iterations: 134081\ncpu: 5.19456538957794 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 0.2065207481653477,
            "unit": "us/iter",
            "extra": "iterations: 3659191\ncpu: 0.20647964755051068 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 2.694754453674247,
            "unit": "us/iter",
            "extra": "iterations: 246931\ncpu: 2.6946097776302067 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.0488620706859308,
            "unit": "us/iter",
            "extra": "iterations: 701555\ncpu: 1.0487814212712856 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.4782139372488416,
            "unit": "us/iter",
            "extra": "iterations: 525570\ncpu: 1.4780278079038414 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 2.2465750290090862,
            "unit": "us/iter",
            "extra": "iterations: 317144\ncpu: 2.2465532407990576 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 3.286069103456153,
            "unit": "us/iter",
            "extra": "iterations: 192740\ncpu: 3.285541185016128 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 2.913006455596717,
            "unit": "us/iter",
            "extra": "iterations: 226780\ncpu: 2.912886343592933 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 2.022316842417086,
            "unit": "us/iter",
            "extra": "iterations: 344998\ncpu: 2.0221280036405678 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 3.4670019535278955,
            "unit": "us/iter",
            "extra": "iterations: 213460\ncpu: 3.46695215497043 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 4.784651555894257,
            "unit": "us/iter",
            "extra": "iterations: 152099\ncpu: 4.784414611535968 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.1008792607952864,
            "unit": "us/iter",
            "extra": "iterations: 596749\ncpu: 1.1008460206887767 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 1.7851268348400533,
            "unit": "us/iter",
            "extra": "iterations: 377349\ncpu: 1.7846518978452106 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.6226122284753368,
            "unit": "us/iter",
            "extra": "iterations: 1077387\ncpu: 0.6226147001959559 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.6469758603536132,
            "unit": "us/iter",
            "extra": "iterations: 1001216\ncpu: 0.6468311653029905 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 2.601800302220088,
            "unit": "us/iter",
            "extra": "iterations: 270664\ncpu: 2.601500794342717 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.1801872328685326,
            "unit": "us/iter",
            "extra": "iterations: 612761\ncpu: 1.180021620174928 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 3.059768429009868,
            "unit": "us/iter",
            "extra": "iterations: 239473\ncpu: 3.0597817708050634 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.6988154244665162,
            "unit": "us/iter",
            "extra": "iterations: 1019951\ncpu: 0.6987380834961827 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.6620538682836714,
            "unit": "us/iter",
            "extra": "iterations: 1117188\ncpu: 0.6619912422976424 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 1.7005187423629686,
            "unit": "us/iter",
            "extra": "iterations: 427214\ncpu: 1.7004024095652484 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 1.541974905969556,
            "unit": "us/iter",
            "extra": "iterations: 434167\ncpu: 1.5415416210813264 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 4.138526872472887,
            "unit": "us/iter",
            "extra": "iterations: 163941\ncpu: 4.1382873655766055 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 2.689904526401894,
            "unit": "us/iter",
            "extra": "iterations: 265288\ncpu: 2.6894755850245575 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 1.698949455621828,
            "unit": "us/iter",
            "extra": "iterations: 409917\ncpu: 1.69887493809719 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 2.172031895964786,
            "unit": "us/iter",
            "extra": "iterations: 318661\ncpu: 2.1715686450491254 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 0.17102298125184343,
            "unit": "us/iter",
            "extra": "iterations: 4156301\ncpu: 0.17102344031387312 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 2.5093754722916723,
            "unit": "us/iter",
            "extra": "iterations: 273666\ncpu: 2.5087734756966755 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.00043999535833,
            "unit": "us/iter",
            "extra": "iterations: 646325\ncpu: 1.0004434502765707 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.155549122645934,
            "unit": "us/iter",
            "extra": "iterations: 632356\ncpu: 1.1554670312292763 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 1.8149723574152703,
            "unit": "us/iter",
            "extra": "iterations: 405389\ncpu: 1.81489778706378 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 2.905887433557077,
            "unit": "us/iter",
            "extra": "iterations: 238739\ncpu: 2.90572209819097 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 2.8278875281522975,
            "unit": "us/iter",
            "extra": "iterations: 231329\ncpu: 2.827869787186098 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 2.001832435295554,
            "unit": "us/iter",
            "extra": "iterations: 364498\ncpu: 2.0018383749705118 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 3.4026582646220054,
            "unit": "us/iter",
            "extra": "iterations: 210663\ncpu: 3.40262237792104 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 4.274298348778897,
            "unit": "us/iter",
            "extra": "iterations: 152372\ncpu: 4.273902114561679 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.038211416299323,
            "unit": "us/iter",
            "extra": "iterations: 719883\ncpu: 1.038200586762014 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 1.725569492498057,
            "unit": "us/iter",
            "extra": "iterations: 407821\ncpu: 1.7255582351080516 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.626902174861402,
            "unit": "us/iter",
            "extra": "iterations: 985810\ncpu: 0.626742037512299 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.6495384771682955,
            "unit": "us/iter",
            "extra": "iterations: 1038460\ncpu: 0.649463051056378 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 2.7037078477771366,
            "unit": "us/iter",
            "extra": "iterations: 249370\ncpu: 2.703163411797674 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.2637175200129032,
            "unit": "us/iter",
            "extra": "iterations: 516164\ncpu: 1.2636202679768451 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 3.0869845974214862,
            "unit": "us/iter",
            "extra": "iterations: 241518\ncpu: 3.085353750031109 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.6817013830941936,
            "unit": "us/iter",
            "extra": "iterations: 1115687\ncpu: 0.6817034679081131 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.6924825105219113,
            "unit": "us/iter",
            "extra": "iterations: 1027818\ncpu: 0.6895242542940647 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 1.749656661096839,
            "unit": "us/iter",
            "extra": "iterations: 356668\ncpu: 1.7491167612457013 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 1.564523946128668,
            "unit": "us/iter",
            "extra": "iterations: 450031\ncpu: 1.5644383675791458 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 4.165064140216689,
            "unit": "us/iter",
            "extra": "iterations: 169909\ncpu: 4.164249621856504 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 2.6979555046757535,
            "unit": "us/iter",
            "extra": "iterations: 265983\ncpu: 2.697941093979715 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 1.8004960953124982,
            "unit": "us/iter",
            "extra": "iterations: 347403\ncpu: 1.8001132891771225 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 2.1782897234196157,
            "unit": "us/iter",
            "extra": "iterations: 317810\ncpu: 2.1782658884239146 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 0.17965183029282775,
            "unit": "us/iter",
            "extra": "iterations: 3861568\ncpu: 0.1796049040182669 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 2.347129491712357,
            "unit": "us/iter",
            "extra": "iterations: 302112\ncpu: 2.3471357642198973 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.019614322919066,
            "unit": "us/iter",
            "extra": "iterations: 706127\ncpu: 1.0195362491449727 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.110075121550478,
            "unit": "us/iter",
            "extra": "iterations: 654872\ncpu: 1.1100784809855786 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 1.8441251398318688,
            "unit": "us/iter",
            "extra": "iterations: 356681\ncpu: 1.8475446883910083 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 2.871931575699802,
            "unit": "us/iter",
            "extra": "iterations: 252878\ncpu: 2.8715455555643765 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 2.890152077578851,
            "unit": "us/iter",
            "extra": "iterations: 251615\ncpu: 2.890129928660822 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 2.063141113534768,
            "unit": "us/iter",
            "extra": "iterations: 358534\ncpu: 2.062781914685922 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 3.50339986515977,
            "unit": "us/iter",
            "extra": "iterations: 186888\ncpu: 3.503383775309297 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 4.666973361284866,
            "unit": "us/iter",
            "extra": "iterations: 156464\ncpu: 4.666858555322536 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.0921140030204037,
            "unit": "us/iter",
            "extra": "iterations: 601256\ncpu: 1.0920874968399599 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 1.9798360734266915,
            "unit": "us/iter",
            "extra": "iterations: 402906\ncpu: 1.9796700272520165 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.6595084247086095,
            "unit": "us/iter",
            "extra": "iterations: 1015228\ncpu: 0.6594862730342191 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.6666518920298496,
            "unit": "us/iter",
            "extra": "iterations: 962934\ncpu: 0.6664219084589359 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 2.618902075601274,
            "unit": "us/iter",
            "extra": "iterations: 277510\ncpu: 2.6185622824403074 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.1918978385637675,
            "unit": "us/iter",
            "extra": "iterations: 608762\ncpu: 1.191601847684334 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 2.9641090607371323,
            "unit": "us/iter",
            "extra": "iterations: 230798\ncpu: 2.964119013163102 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.6521190063254626,
            "unit": "us/iter",
            "extra": "iterations: 1126083\ncpu: 0.6520220267955522 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.6567689255143957,
            "unit": "us/iter",
            "extra": "iterations: 1124408\ncpu: 0.6567431297180399 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 1.783695329883211,
            "unit": "us/iter",
            "extra": "iterations: 395943\ncpu: 1.7836633530584087 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 1.5212411583515133,
            "unit": "us/iter",
            "extra": "iterations: 444770\ncpu: 1.5210449558198251 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 4.191700669230918,
            "unit": "us/iter",
            "extra": "iterations: 165115\ncpu: 4.1916588862308535 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 2.735937697647918,
            "unit": "us/iter",
            "extra": "iterations: 265624\ncpu: 2.7356359139234505 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 1.8615779846168183,
            "unit": "us/iter",
            "extra": "iterations: 395905\ncpu: 1.8615713820235253 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 2.329441286189186,
            "unit": "us/iter",
            "extra": "iterations: 309348\ncpu: 2.3289933731591077 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 0.18044899320661284,
            "unit": "us/iter",
            "extra": "iterations: 4089220\ncpu: 0.1804327108837422 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 2.6260799875287955,
            "unit": "us/iter",
            "extra": "iterations: 263016\ncpu: 2.6251572261763423 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 0.9847408066479465,
            "unit": "us/iter",
            "extra": "iterations: 714810\ncpu: 0.9847342356710316 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.0890461330706465,
            "unit": "us/iter",
            "extra": "iterations: 598356\ncpu: 1.0887460909559084 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 1.8067866419245802,
            "unit": "us/iter",
            "extra": "iterations: 393934\ncpu: 1.8065755253416815 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 2.9401226155247633,
            "unit": "us/iter",
            "extra": "iterations: 244341\ncpu: 2.9394399384467262 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 2.9232651229603945,
            "unit": "us/iter",
            "extra": "iterations: 258944\ncpu: 2.9231342954461415 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 2.06229650098894,
            "unit": "us/iter",
            "extra": "iterations: 324606\ncpu: 2.0621211098992713 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 3.5557394879726094,
            "unit": "us/iter",
            "extra": "iterations: 208309\ncpu: 3.555489681194685 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 4.671990842232398,
            "unit": "us/iter",
            "extra": "iterations: 148071\ncpu: 4.671029154932336 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.139358568487892,
            "unit": "us/iter",
            "extra": "iterations: 605346\ncpu: 1.1392674486987384 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 1.7431852432987118,
            "unit": "us/iter",
            "extra": "iterations: 416814\ncpu: 1.7428002490319658 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.6322845667379117,
            "unit": "us/iter",
            "extra": "iterations: 1058655\ncpu: 0.6322197675352381 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.7032852789905253,
            "unit": "us/iter",
            "extra": "iterations: 1028530\ncpu: 0.7032879031238793 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 2.605553569149914,
            "unit": "us/iter",
            "extra": "iterations: 274309\ncpu: 2.605205439850746 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.1841706088601938,
            "unit": "us/iter",
            "extra": "iterations: 581529\ncpu: 1.1841738675113342 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 3.0449337048239795,
            "unit": "us/iter",
            "extra": "iterations: 230243\ncpu: 3.044459653496635 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.7180804227403814,
            "unit": "us/iter",
            "extra": "iterations: 1022472\ncpu: 0.7180665406974075 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.7335952831938621,
            "unit": "us/iter",
            "extra": "iterations: 782945\ncpu: 0.7335275798427502 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 1.8308883672716794,
            "unit": "us/iter",
            "extra": "iterations: 366595\ncpu: 1.8307830657810686 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 1.6489622971431734,
            "unit": "us/iter",
            "extra": "iterations: 437500\ncpu: 1.6488874171428896 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 4.459234357035105,
            "unit": "us/iter",
            "extra": "iterations: 161766\ncpu: 4.459101467551852 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 2.8270040769135627,
            "unit": "us/iter",
            "extra": "iterations: 255095\ncpu: 2.8267764009486527 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 1.8683482342289288,
            "unit": "us/iter",
            "extra": "iterations: 413219\ncpu: 1.8683539382265633 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 2.439685064368417,
            "unit": "us/iter",
            "extra": "iterations: 275288\ncpu: 2.4395411242043497 us\nthreads: undefined"
          },
          {
            "name": "BM_SELECT_RANDOM_OBJECT/real_time",
            "value": 10.872315499671343,
            "unit": "ns/iter",
            "extra": "iterations: 62247571\ncpu: 10.871007127330683 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 42.81488226808769,
            "unit": "ns/iter",
            "extra": "iterations: 17284395\ncpu: 42.813449762052954 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 46.60334283492764,
            "unit": "ns/iter",
            "extra": "iterations: 13349687\ncpu: 46.59160682943156 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 57.91071878866933,
            "unit": "ns/iter",
            "extra": "iterations: 12075441\ncpu: 57.910341245508754 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 65.04534852370941,
            "unit": "ns/iter",
            "extra": "iterations: 10037394\ncpu: 65.03767382250837 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 75.48499033099024,
            "unit": "ns/iter",
            "extra": "iterations: 10249260\ncpu: 75.47613769189157 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 80.79902595993187,
            "unit": "ns/iter",
            "extra": "iterations: 8623054\ncpu: 80.79816338851603 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 91.60166027243031,
            "unit": "ns/iter",
            "extra": "iterations: 7743187\ncpu: 91.58334481654674 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 101.05748223719687,
            "unit": "ns/iter",
            "extra": "iterations: 6487291\ncpu: 101.05267468347682 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 120.86507630561749,
            "unit": "ns/iter",
            "extra": "iterations: 5792563\ncpu: 120.83040926787842 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 53.409689199997956,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 53.409432300003346 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 59.16813840170787,
            "unit": "ns/iter",
            "extra": "iterations: 11583267\ncpu: 59.16538132117835 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 66.00632873676672,
            "unit": "ns/iter",
            "extra": "iterations: 10890483\ncpu: 65.98988998008508 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 75.07861636628772,
            "unit": "ns/iter",
            "extra": "iterations: 9832342\ncpu: 75.07882608233004 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 81.02081016001218,
            "unit": "ns/iter",
            "extra": "iterations: 9373210\ncpu: 81.01693987438584 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 86.98008296265262,
            "unit": "ns/iter",
            "extra": "iterations: 7989140\ncpu: 86.97108675026149 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 101.51623701591882,
            "unit": "ns/iter",
            "extra": "iterations: 7204495\ncpu: 101.51644313723395 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 114.89003613457606,
            "unit": "ns/iter",
            "extra": "iterations: 6252463\ncpu: 114.86655290882321 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 132.20879254121817,
            "unit": "ns/iter",
            "extra": "iterations: 4997918\ncpu: 132.2019895084319 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 89.76078467846749,
            "unit": "ns/iter",
            "extra": "iterations: 8493925\ncpu: 89.74706593241591 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 154.50743041366965,
            "unit": "ns/iter",
            "extra": "iterations: 4738969\ncpu: 154.50052152693905 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 297.78270775349995,
            "unit": "ns/iter",
            "extra": "iterations: 2358745\ncpu: 297.76123150234474 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 623.8750035792109,
            "unit": "ns/iter",
            "extra": "iterations: 1082623\ncpu: 623.8229688450842 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 1412.8798016128615,
            "unit": "ns/iter",
            "extra": "iterations: 507694\ncpu: 1412.8557733595724 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 3084.6671961187035,
            "unit": "ns/iter",
            "extra": "iterations: 232945\ncpu: 3084.334096031415 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 7264.371662394137,
            "unit": "ns/iter",
            "extra": "iterations: 99098\ncpu: 7263.945034208807 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 21344.59678196498,
            "unit": "ns/iter",
            "extra": "iterations: 31137\ncpu: 21340.51594566042 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 62709.84470002077,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62709.40119999864 ns\nthreads: undefined"
          }
        ]
      },
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
          "id": "6d74a94b790ac2ecf3be4a8eb72a9ef7260c7804",
          "message": "Add Flatten utility",
          "timestamp": "2020-06-30T15:51:17-05:00",
          "tree_id": "b9b05f54a23d5a151194a5b61e6a2c61bd733358",
          "url": "https://github.com/ros-industrial-consortium/tesseract/commit/6d74a94b790ac2ecf3be4a8eb72a9ef7260c7804"
        },
        "date": 1593553322864,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_0/real_time",
            "value": 76.92726822828325,
            "unit": "us/iter",
            "extra": "iterations: 9093\ncpu: 76.90868690201255 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 77.2702192109673,
            "unit": "us/iter",
            "extra": "iterations: 8745\ncpu: 77.27058673527728 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 80.27667069957074,
            "unit": "us/iter",
            "extra": "iterations: 8348\ncpu: 80.25590416866315 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 83.22036291581901,
            "unit": "us/iter",
            "extra": "iterations: 8958\ncpu: 83.21934192900201 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 92.98441796632468,
            "unit": "us/iter",
            "extra": "iterations: 8015\ncpu: 92.97680661260135 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 108.69625388360751,
            "unit": "us/iter",
            "extra": "iterations: 6373\ncpu: 108.67640153773726 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 159.631467831099,
            "unit": "us/iter",
            "extra": "iterations: 4523\ncpu: 159.63197214238338 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 283.6551975447389,
            "unit": "us/iter",
            "extra": "iterations: 2688\ncpu: 282.8801369047619 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 551.8665146946324,
            "unit": "us/iter",
            "extra": "iterations: 1327\ncpu: 551.8676865109269 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 1581.8131655776474,
            "unit": "us/iter",
            "extra": "iterations: 459\ncpu: 1581.258525054466 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 4.700242318170292,
            "unit": "us/iter",
            "extra": "iterations: 128843\ncpu: 4.69980499522676 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 7.156093517180614,
            "unit": "us/iter",
            "extra": "iterations: 97982\ncpu: 7.155956502214687 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 41.70689934456601,
            "unit": "us/iter",
            "extra": "iterations: 17088\ncpu: 41.703446219569294 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 23.44494310155128,
            "unit": "us/iter",
            "extra": "iterations: 30862\ncpu: 23.44295233620639 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 5.3020265168951255,
            "unit": "us/iter",
            "extra": "iterations: 130332\ncpu: 5.300188856151986 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 6.856853637534523,
            "unit": "us/iter",
            "extra": "iterations: 106858\ncpu: 6.856875423459176 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 4.826979940959494,
            "unit": "us/iter",
            "extra": "iterations: 148711\ncpu: 4.825835203851767 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 66.39095971131754,
            "unit": "us/iter",
            "extra": "iterations: 10946\ncpu: 66.39129307509592 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 66.8026768775809,
            "unit": "us/iter",
            "extra": "iterations: 10479\ncpu: 66.78597986449088 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 5.350233945644463,
            "unit": "us/iter",
            "extra": "iterations: 139635\ncpu: 5.35015226125254 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 40.70376145634031,
            "unit": "us/iter",
            "extra": "iterations: 18265\ncpu: 40.693039967150284 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 66.50540142306689,
            "unit": "us/iter",
            "extra": "iterations: 10119\ncpu: 66.50466656784258 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.568417758004446,
            "unit": "us/iter",
            "extra": "iterations: 1351323\ncpu: 0.568413131427497 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.5596150209446407,
            "unit": "us/iter",
            "extra": "iterations: 1119144\ncpu: 0.5594902854324387 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 12.489052384883525,
            "unit": "us/iter",
            "extra": "iterations: 56963\ncpu: 12.489091655987217 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 24.347921134987168,
            "unit": "us/iter",
            "extra": "iterations: 28441\ncpu: 24.33841703878212 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 65.27989355793986,
            "unit": "us/iter",
            "extra": "iterations: 10804\ncpu: 65.67000490559055 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.6011542886797888,
            "unit": "us/iter",
            "extra": "iterations: 1237129\ncpu: 0.6011002231780173 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.5724258778901583,
            "unit": "us/iter",
            "extra": "iterations: 1239050\ncpu: 0.5722489463702009 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 75.74848705271738,
            "unit": "us/iter",
            "extra": "iterations: 9307\ncpu: 75.74276061029317 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 5.966474498138156,
            "unit": "us/iter",
            "extra": "iterations: 122344\ncpu: 5.9649315373046505 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 5.918642398601711,
            "unit": "us/iter",
            "extra": "iterations: 122438\ncpu: 5.918186004345043 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 14.54520092767583,
            "unit": "us/iter",
            "extra": "iterations: 49371\ncpu: 14.542885519839617 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 72.80709965215418,
            "unit": "us/iter",
            "extra": "iterations: 9774\ncpu: 72.78626570493151 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 4.235961870617477,
            "unit": "us/iter",
            "extra": "iterations: 150068\ncpu: 4.2356520044246695 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 4.251607595164659,
            "unit": "us/iter",
            "extra": "iterations: 166132\ncpu: 4.2515468964437835 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 6.760293289258296,
            "unit": "us/iter",
            "extra": "iterations: 104668\ncpu: 6.760234875988847 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 38.57541781433809,
            "unit": "us/iter",
            "extra": "iterations: 17862\ncpu: 38.57242884335483 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 22.63196801884079,
            "unit": "us/iter",
            "extra": "iterations: 33551\ncpu: 22.63007352985024 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 4.866424929051528,
            "unit": "us/iter",
            "extra": "iterations: 134606\ncpu: 4.865447966658272 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 6.498065849980671,
            "unit": "us/iter",
            "extra": "iterations: 108079\ncpu: 6.498094727005274 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 4.793405902284658,
            "unit": "us/iter",
            "extra": "iterations: 139573\ncpu: 4.792423541802461 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 64.2282908337691,
            "unit": "us/iter",
            "extra": "iterations: 11106\ncpu: 64.22744750585292 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 67.13059268358732,
            "unit": "us/iter",
            "extra": "iterations: 10989\ncpu: 67.12785030485017 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 5.460173939447454,
            "unit": "us/iter",
            "extra": "iterations: 136674\ncpu: 5.458795330494448 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 39.73083422156078,
            "unit": "us/iter",
            "extra": "iterations: 17638\ncpu: 39.73058220886686 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 65.96926078310292,
            "unit": "us/iter",
            "extra": "iterations: 11059\ncpu: 65.94301401573422 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.4918003457942986,
            "unit": "us/iter",
            "extra": "iterations: 1422810\ncpu: 0.4917967332250962 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.5391921372046959,
            "unit": "us/iter",
            "extra": "iterations: 1349749\ncpu: 0.5390487772170965 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 12.801584656489693,
            "unit": "us/iter",
            "extra": "iterations: 58383\ncpu: 12.80134271962731 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 25.703743390461597,
            "unit": "us/iter",
            "extra": "iterations: 27536\ncpu: 25.697490848343996 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 66.36048831603637,
            "unit": "us/iter",
            "extra": "iterations: 10784\ncpu: 66.35975435830827 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.5550186802368533,
            "unit": "us/iter",
            "extra": "iterations: 1385582\ncpu: 0.5549108836575519 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.5232141965060653,
            "unit": "us/iter",
            "extra": "iterations: 1191434\ncpu: 0.5231411769346853 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 67.09296340892483,
            "unit": "us/iter",
            "extra": "iterations: 10713\ncpu: 67.09415140483537 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 5.5910445729422005,
            "unit": "us/iter",
            "extra": "iterations: 127454\ncpu: 5.589420300657474 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 5.4290603507288395,
            "unit": "us/iter",
            "extra": "iterations: 119750\ncpu: 5.428913010438376 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 13.701498850622372,
            "unit": "us/iter",
            "extra": "iterations: 53072\ncpu: 13.701386588031362 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 67.56827870116841,
            "unit": "us/iter",
            "extra": "iterations: 10348\ncpu: 67.54603314650133 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 4.643514444471287,
            "unit": "us/iter",
            "extra": "iterations: 166292\ncpu: 4.643446708200058 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 4.4900894874101525,
            "unit": "us/iter",
            "extra": "iterations: 152636\ncpu: 4.489975746219748 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 6.742549091975298,
            "unit": "us/iter",
            "extra": "iterations: 98896\ncpu: 6.7424850246723596 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 39.22252984903948,
            "unit": "us/iter",
            "extra": "iterations: 17488\ncpu: 39.22157090576399 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 22.392337954193128,
            "unit": "us/iter",
            "extra": "iterations: 32750\ncpu: 22.3902250076336 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 5.176494118809407,
            "unit": "us/iter",
            "extra": "iterations: 131776\ncpu: 5.175273714485157 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 7.139613297164392,
            "unit": "us/iter",
            "extra": "iterations: 106534\ncpu: 7.139634022940992 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 5.106801303378099,
            "unit": "us/iter",
            "extra": "iterations: 116313\ncpu: 5.105594568105044 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 71.39591581185347,
            "unit": "us/iter",
            "extra": "iterations: 10821\ncpu: 71.38840550780922 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 64.63473306856184,
            "unit": "us/iter",
            "extra": "iterations: 9317\ncpu: 64.6328091660408 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 5.440489687878257,
            "unit": "us/iter",
            "extra": "iterations: 132417\ncpu: 5.439350793327127 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 39.02457108263225,
            "unit": "us/iter",
            "extra": "iterations: 16931\ncpu: 39.02469924989657 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 66.44964481650753,
            "unit": "us/iter",
            "extra": "iterations: 11228\ncpu: 66.43148334520859 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.552874509890214,
            "unit": "us/iter",
            "extra": "iterations: 1316032\ncpu: 0.5528658718025085 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.6070837699632816,
            "unit": "us/iter",
            "extra": "iterations: 1159067\ncpu: 0.6070408578624025 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 13.099982848254838,
            "unit": "us/iter",
            "extra": "iterations: 50782\ncpu: 13.09782544996267 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 25.534368521499193,
            "unit": "us/iter",
            "extra": "iterations: 27244\ncpu: 25.534127037146064 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 70.15901291913877,
            "unit": "us/iter",
            "extra": "iterations: 10140\ncpu: 69.97539526627284 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.5468684113969228,
            "unit": "us/iter",
            "extra": "iterations: 1125561\ncpu: 0.5468650637326683 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.5602546665635961,
            "unit": "us/iter",
            "extra": "iterations: 1215884\ncpu: 0.5602158240424349 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 69.89213483759758,
            "unit": "us/iter",
            "extra": "iterations: 9174\ncpu: 69.87007619359169 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 5.698597326777054,
            "unit": "us/iter",
            "extra": "iterations: 131377\ncpu: 5.698623343507683 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 5.475708896072133,
            "unit": "us/iter",
            "extra": "iterations: 133351\ncpu: 5.474092545237717 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 13.480097068217388,
            "unit": "us/iter",
            "extra": "iterations: 55734\ncpu: 13.47990318297642 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 69.11124384525343,
            "unit": "us/iter",
            "extra": "iterations: 11089\ncpu: 69.11080683560331 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 4.627249841960894,
            "unit": "us/iter",
            "extra": "iterations: 151860\ncpu: 4.627207875674908 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 4.276169186868271,
            "unit": "us/iter",
            "extra": "iterations: 164008\ncpu: 4.275191100434115 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 6.6980834642887235,
            "unit": "us/iter",
            "extra": "iterations: 106908\ncpu: 6.697947665282373 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 40.29253866130397,
            "unit": "us/iter",
            "extra": "iterations: 16942\ncpu: 40.28630403730376 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 21.701730752236948,
            "unit": "us/iter",
            "extra": "iterations: 31666\ncpu: 21.70138918714061 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 4.932145007403237,
            "unit": "us/iter",
            "extra": "iterations: 133738\ncpu: 4.932051967279246 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 6.942872836483784,
            "unit": "us/iter",
            "extra": "iterations: 101224\ncpu: 6.940759197423544 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 5.061310720002439,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.0613432999999475 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 70.32172288201062,
            "unit": "us/iter",
            "extra": "iterations: 10104\ncpu: 70.31200613618267 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 65.49161058683451,
            "unit": "us/iter",
            "extra": "iterations: 11127\ncpu: 65.48735499236058 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 5.348163393734661,
            "unit": "us/iter",
            "extra": "iterations: 131890\ncpu: 5.348102547577572 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 41.47808129398876,
            "unit": "us/iter",
            "extra": "iterations: 17898\ncpu: 41.46944474242887 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 65.96288975641251,
            "unit": "us/iter",
            "extra": "iterations: 9606\ncpu: 65.96315105142627 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.5789874220892987,
            "unit": "us/iter",
            "extra": "iterations: 1266029\ncpu: 0.5788504196981322 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.5933725425434567,
            "unit": "us/iter",
            "extra": "iterations: 1062684\ncpu: 0.5936580394548058 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 13.35894735290377,
            "unit": "us/iter",
            "extra": "iterations: 57648\ncpu: 13.357771665972855 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 25.263799685171396,
            "unit": "us/iter",
            "extra": "iterations: 27317\ncpu: 25.262349050042282 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 67.65587553771103,
            "unit": "us/iter",
            "extra": "iterations: 10694\ncpu: 67.65490041144581 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.560687953133023,
            "unit": "us/iter",
            "extra": "iterations: 1183428\ncpu: 0.5605221939991217 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.5788845525152997,
            "unit": "us/iter",
            "extra": "iterations: 1181325\ncpu: 0.5788729722980545 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 68.06660065208995,
            "unit": "us/iter",
            "extra": "iterations: 10735\ncpu: 68.05987591988854 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 5.672456452043194,
            "unit": "us/iter",
            "extra": "iterations: 130695\ncpu: 5.671123126362857 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 5.360973700732367,
            "unit": "us/iter",
            "extra": "iterations: 129015\ncpu: 5.360903228306796 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 13.425862615714468,
            "unit": "us/iter",
            "extra": "iterations: 51527\ncpu: 13.422319754691767 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 70.59725380217179,
            "unit": "us/iter",
            "extra": "iterations: 10323\ncpu: 70.59673060156877 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 4.2508775200715085,
            "unit": "us/iter",
            "extra": "iterations: 159569\ncpu: 4.249878623040829 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 4.391150474453381,
            "unit": "us/iter",
            "extra": "iterations: 150278\ncpu: 4.3911670437455275 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 8.191079041991438,
            "unit": "us/iter",
            "extra": "iterations: 81210\ncpu: 8.189629897795719 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.3461045379889789,
            "unit": "us/iter",
            "extra": "iterations: 543104\ncpu: 1.3459893722012652 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.557037335337935,
            "unit": "us/iter",
            "extra": "iterations: 451074\ncpu: 1.5714748577838926 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 7.341927087645466,
            "unit": "us/iter",
            "extra": "iterations: 99023\ncpu: 7.337041858962074 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 8.278982995577596,
            "unit": "us/iter",
            "extra": "iterations: 87095\ncpu: 8.27890851369204 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 40.465095053695286,
            "unit": "us/iter",
            "extra": "iterations: 17043\ncpu: 40.45807522149834 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 4.052605161562302,
            "unit": "us/iter",
            "extra": "iterations: 166810\ncpu: 4.052469576164556 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 19.87070230542197,
            "unit": "us/iter",
            "extra": "iterations: 35308\ncpu: 19.8642750368188 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 22.006544790225373,
            "unit": "us/iter",
            "extra": "iterations: 31201\ncpu: 22.00629197782147 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.483628211322256,
            "unit": "us/iter",
            "extra": "iterations: 459468\ncpu: 1.483358603863589 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 3.8977869897362742,
            "unit": "us/iter",
            "extra": "iterations: 190465\ncpu: 3.897467077940877 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.7451259379430826,
            "unit": "us/iter",
            "extra": "iterations: 945553\ncpu: 0.7448819928655491 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.8023837641286409,
            "unit": "us/iter",
            "extra": "iterations: 849785\ncpu: 0.8023824049612472 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 24.469144798678162,
            "unit": "us/iter",
            "extra": "iterations: 29579\ncpu: 24.46473917306192 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.6500798957071345,
            "unit": "us/iter",
            "extra": "iterations: 397343\ncpu: 1.6500674077560118 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 21.229692566558043,
            "unit": "us/iter",
            "extra": "iterations: 30309\ncpu: 21.227549506747074 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.8484694040691713,
            "unit": "us/iter",
            "extra": "iterations: 795596\ncpu: 0.8483687964745978 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.8163633823482234,
            "unit": "us/iter",
            "extra": "iterations: 879330\ncpu: 0.8163490782755018 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 27.1532769586151,
            "unit": "us/iter",
            "extra": "iterations: 25975\ncpu: 27.14576319538021 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 8.733079435680796,
            "unit": "us/iter",
            "extra": "iterations: 71945\ncpu: 8.733058058238816 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 21.517970456148912,
            "unit": "us/iter",
            "extra": "iterations: 29617\ncpu: 21.508121349225416 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 28.90331114983507,
            "unit": "us/iter",
            "extra": "iterations: 24673\ncpu: 28.903402423701856 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 29.124469125680424,
            "unit": "us/iter",
            "extra": "iterations: 24373\ncpu: 29.117346818200463 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 6.083403307194612,
            "unit": "us/iter",
            "extra": "iterations: 119497\ncpu: 6.083310275571816 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 4.8870761894447625,
            "unit": "us/iter",
            "extra": "iterations: 129388\ncpu: 4.911471859832495 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 8.511653840751281,
            "unit": "us/iter",
            "extra": "iterations: 85478\ncpu: 8.508509417627911 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.4341252997251954,
            "unit": "us/iter",
            "extra": "iterations: 495037\ncpu: 1.4341089433719079 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.6289662636972617,
            "unit": "us/iter",
            "extra": "iterations: 450820\ncpu: 1.6286160662792168 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 7.897071500945747,
            "unit": "us/iter",
            "extra": "iterations: 95733\ncpu: 7.89689826914442 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 8.923912709121064,
            "unit": "us/iter",
            "extra": "iterations: 80753\ncpu: 8.923165665671839 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 45.4436375838997,
            "unit": "us/iter",
            "extra": "iterations: 15794\ncpu: 45.44384677725729 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 4.684656954737975,
            "unit": "us/iter",
            "extra": "iterations: 124692\ncpu: 4.637731346036666 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 21.129149268024083,
            "unit": "us/iter",
            "extra": "iterations: 32378\ncpu: 21.12770899993829 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 23.330817972654728,
            "unit": "us/iter",
            "extra": "iterations: 31292\ncpu: 23.328805765051694 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.5702894277186674,
            "unit": "us/iter",
            "extra": "iterations: 436831\ncpu: 1.5660842522623148 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 4.144453815468523,
            "unit": "us/iter",
            "extra": "iterations: 175221\ncpu: 4.144425103155341 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.8019911375389036,
            "unit": "us/iter",
            "extra": "iterations: 886774\ncpu: 0.8017090972446181 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.8280715651723825,
            "unit": "us/iter",
            "extra": "iterations: 888407\ncpu: 0.8280744140917646 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 24.838490491065183,
            "unit": "us/iter",
            "extra": "iterations: 27185\ncpu: 24.827002795659276 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.6679527247538386,
            "unit": "us/iter",
            "extra": "iterations: 409982\ncpu: 1.667957993277773 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 20.132539118177693,
            "unit": "us/iter",
            "extra": "iterations: 36198\ncpu: 20.12859682855408 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.7871977332942703,
            "unit": "us/iter",
            "extra": "iterations: 907308\ncpu: 0.7871866224038744 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.7516986328780437,
            "unit": "us/iter",
            "extra": "iterations: 914622\ncpu: 0.7516835971581509 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 25.816843099834312,
            "unit": "us/iter",
            "extra": "iterations: 26724\ncpu: 25.811406376291163 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 8.217729592984082,
            "unit": "us/iter",
            "extra": "iterations: 84787\ncpu: 8.217634448677154 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 22.470328186608864,
            "unit": "us/iter",
            "extra": "iterations: 30181\ncpu: 22.429657566018435 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 25.545552380214694,
            "unit": "us/iter",
            "extra": "iterations: 25964\ncpu: 25.54563476351805 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 27.2671512219047,
            "unit": "us/iter",
            "extra": "iterations: 26557\ncpu: 27.257945664042985 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 5.631884877294362,
            "unit": "us/iter",
            "extra": "iterations: 126439\ncpu: 5.631909426680024 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 4.810567923517096,
            "unit": "us/iter",
            "extra": "iterations: 139635\ncpu: 4.8100381136534605 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 8.169353397532822,
            "unit": "us/iter",
            "extra": "iterations: 92935\ncpu: 8.167741453704211 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.3817957878880718,
            "unit": "us/iter",
            "extra": "iterations: 516463\ncpu: 1.3817858452590013 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.4760910826366422,
            "unit": "us/iter",
            "extra": "iterations: 454686\ncpu: 1.4756904017277812 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 7.509261355952309,
            "unit": "us/iter",
            "extra": "iterations: 99133\ncpu: 7.50879011025596 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 8.067267424334709,
            "unit": "us/iter",
            "extra": "iterations: 78310\ncpu: 8.066517060400983 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 39.27023581446454,
            "unit": "us/iter",
            "extra": "iterations: 17183\ncpu: 39.27035284874712 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 4.333612122921486,
            "unit": "us/iter",
            "extra": "iterations: 170322\ncpu: 4.331881812097005 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 20.6946745068176,
            "unit": "us/iter",
            "extra": "iterations: 34013\ncpu: 20.694446740952145 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 22.26621146387697,
            "unit": "us/iter",
            "extra": "iterations: 29135\ncpu: 22.26246511069107 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.5149232312681078,
            "unit": "us/iter",
            "extra": "iterations: 463496\ncpu: 1.514730224209042 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 3.7049909520985502,
            "unit": "us/iter",
            "extra": "iterations: 183689\ncpu: 3.704166678461973 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.7647577685446788,
            "unit": "us/iter",
            "extra": "iterations: 928327\ncpu: 0.7647430366670306 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.7863849712028356,
            "unit": "us/iter",
            "extra": "iterations: 831670\ncpu: 0.7863779371626088 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 23.798732388680953,
            "unit": "us/iter",
            "extra": "iterations: 27241\ncpu: 23.791799456702055 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.6813147691579005,
            "unit": "us/iter",
            "extra": "iterations: 408852\ncpu: 1.681299663447834 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 20.685566963057617,
            "unit": "us/iter",
            "extra": "iterations: 36214\ncpu: 20.679407798088825 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.7597785477630816,
            "unit": "us/iter",
            "extra": "iterations: 942298\ncpu: 0.759781069258342 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.809013295134687,
            "unit": "us/iter",
            "extra": "iterations: 860766\ncpu: 0.8089378855577445 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 26.52828944121676,
            "unit": "us/iter",
            "extra": "iterations: 26755\ncpu: 26.527872136050117 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 8.157776198621514,
            "unit": "us/iter",
            "extra": "iterations: 79508\ncpu: 8.157423240428601 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 21.286975257601515,
            "unit": "us/iter",
            "extra": "iterations: 32414\ncpu: 21.282360831738842 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 27.172325523652507,
            "unit": "us/iter",
            "extra": "iterations: 25780\ncpu: 27.171400271528373 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 28.27857569758651,
            "unit": "us/iter",
            "extra": "iterations: 26771\ncpu: 28.272732210227698 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 5.880011041074092,
            "unit": "us/iter",
            "extra": "iterations: 119463\ncpu: 5.879913353925589 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 5.070232663465515,
            "unit": "us/iter",
            "extra": "iterations: 140426\ncpu: 5.069341617649001 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 8.235987605224118,
            "unit": "us/iter",
            "extra": "iterations: 86246\ncpu: 8.235824988985046 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 1.4528423927700693,
            "unit": "us/iter",
            "extra": "iterations: 492985\ncpu: 1.4525126099171233 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.6113023700962334,
            "unit": "us/iter",
            "extra": "iterations: 429434\ncpu: 1.6111820396149354 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 7.878191547344171,
            "unit": "us/iter",
            "extra": "iterations: 91001\ncpu: 7.875936605092469 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 8.953423870588889,
            "unit": "us/iter",
            "extra": "iterations: 81414\ncpu: 8.952992089812701 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 43.07853209684319,
            "unit": "us/iter",
            "extra": "iterations: 16606\ncpu: 43.0718994941596 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 4.499456577148133,
            "unit": "us/iter",
            "extra": "iterations: 163992\ncpu: 4.499472968193648 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 20.86921269801713,
            "unit": "us/iter",
            "extra": "iterations: 31312\ncpu: 20.860858776188266 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 23.775182725710195,
            "unit": "us/iter",
            "extra": "iterations: 31654\ncpu: 23.775123870600154 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.4966155036664428,
            "unit": "us/iter",
            "extra": "iterations: 443250\ncpu: 1.496362851663833 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 3.894533123587273,
            "unit": "us/iter",
            "extra": "iterations: 191661\ncpu: 3.894548520564963 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.7052755220944846,
            "unit": "us/iter",
            "extra": "iterations: 1008391\ncpu: 0.7050909369480612 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.771223269135453,
            "unit": "us/iter",
            "extra": "iterations: 889281\ncpu: 0.7711321247165002 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 24.820800115689522,
            "unit": "us/iter",
            "extra": "iterations: 29387\ncpu: 24.81915986660794 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.702204365088436,
            "unit": "us/iter",
            "extra": "iterations: 416074\ncpu: 1.7017884246552029 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 20.854434456930125,
            "unit": "us/iter",
            "extra": "iterations: 34977\ncpu: 20.851858135346287 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.7840878568750808,
            "unit": "us/iter",
            "extra": "iterations: 861401\ncpu: 0.7837469064930086 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.7879528641918842,
            "unit": "us/iter",
            "extra": "iterations: 798480\ncpu: 0.7879554478509208 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 26.019679251278085,
            "unit": "us/iter",
            "extra": "iterations: 28262\ncpu: 26.015929021300686 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 8.344355178641313,
            "unit": "us/iter",
            "extra": "iterations: 71457\ncpu: 8.344208055193967 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 22.469958374528446,
            "unit": "us/iter",
            "extra": "iterations: 31351\ncpu: 22.46940470798301 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 29.264635127280375,
            "unit": "us/iter",
            "extra": "iterations: 24118\ncpu: 29.25902558255175 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 28.02304238168481,
            "unit": "us/iter",
            "extra": "iterations: 24067\ncpu: 28.022905721527515 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 5.985213936010411,
            "unit": "us/iter",
            "extra": "iterations: 122962\ncpu: 5.983612644556721 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 0.21825882048924586,
            "unit": "us/iter",
            "extra": "iterations: 3173180\ncpu: 0.21825690947251328 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 3.0964530600145097,
            "unit": "us/iter",
            "extra": "iterations: 226012\ncpu: 3.0892397085110392 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.2242265803396344,
            "unit": "us/iter",
            "extra": "iterations: 587690\ncpu: 1.2241850074018532 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.2744621791803847,
            "unit": "us/iter",
            "extra": "iterations: 572674\ncpu: 1.2741433136478948 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 2.1746605243784476,
            "unit": "us/iter",
            "extra": "iterations: 315192\ncpu: 2.1745299531714455 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 3.5842593143759856,
            "unit": "us/iter",
            "extra": "iterations: 187479\ncpu: 3.5824303842029352 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 3.5966070709717277,
            "unit": "us/iter",
            "extra": "iterations: 197738\ncpu: 3.59654454379023 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 2.4595530054075896,
            "unit": "us/iter",
            "extra": "iterations: 292140\ncpu: 2.4586955569248024 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 4.262230890622699,
            "unit": "us/iter",
            "extra": "iterations: 165390\ncpu: 4.262191166334072 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 5.254423052881391,
            "unit": "us/iter",
            "extra": "iterations: 115196\ncpu: 5.25302405465462 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.2727424934708422,
            "unit": "us/iter",
            "extra": "iterations: 549788\ncpu: 1.272747093425113 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 2.2090584950840633,
            "unit": "us/iter",
            "extra": "iterations: 335806\ncpu: 2.208945748438057 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.7254987883958316,
            "unit": "us/iter",
            "extra": "iterations: 962773\ncpu: 0.7254345645339068 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.7717879704000267,
            "unit": "us/iter",
            "extra": "iterations: 864318\ncpu: 0.7717676919837374 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 3.322341531182292,
            "unit": "us/iter",
            "extra": "iterations: 222782\ncpu: 3.3214095483477473 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.4595162800232822,
            "unit": "us/iter",
            "extra": "iterations: 502057\ncpu: 1.459470139844684 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 3.824019991328273,
            "unit": "us/iter",
            "extra": "iterations: 182229\ncpu: 3.8234075421584763 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.7675080517652793,
            "unit": "us/iter",
            "extra": "iterations: 785542\ncpu: 0.7674845495212403 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.8156150496258825,
            "unit": "us/iter",
            "extra": "iterations: 956861\ncpu: 0.8153703954911053 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 2.175258087999251,
            "unit": "us/iter",
            "extra": "iterations: 324184\ncpu: 2.175264686104127 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 1.8505152930724937,
            "unit": "us/iter",
            "extra": "iterations: 385109\ncpu: 1.850236803086922 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 5.015009550002105,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.014557800000148 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 3.378112116342514,
            "unit": "us/iter",
            "extra": "iterations: 219076\ncpu: 3.378008325877826 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 2.273446240702104,
            "unit": "us/iter",
            "extra": "iterations: 311388\ncpu: 2.2729654161368127 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 2.8526290747300145,
            "unit": "us/iter",
            "extra": "iterations: 249495\ncpu: 2.8525822040522923 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 0.20264894091685348,
            "unit": "us/iter",
            "extra": "iterations: 3339398\ncpu: 0.2026136968399749 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 3.017347754310781,
            "unit": "us/iter",
            "extra": "iterations: 240483\ncpu: 3.017216094276963 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.2032084846870597,
            "unit": "us/iter",
            "extra": "iterations: 661804\ncpu: 1.2029546361158447 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.3244538051948114,
            "unit": "us/iter",
            "extra": "iterations: 558158\ncpu: 1.3243972620656057 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 2.191793677040069,
            "unit": "us/iter",
            "extra": "iterations: 321147\ncpu: 2.190979769389068 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 3.6845802290452228,
            "unit": "us/iter",
            "extra": "iterations: 190006\ncpu: 3.6845550666822215 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 3.547247448432279,
            "unit": "us/iter",
            "extra": "iterations: 200563\ncpu: 3.546293339249989 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 2.4415726413374483,
            "unit": "us/iter",
            "extra": "iterations: 284356\ncpu: 2.4415473420641867 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 4.181303456612775,
            "unit": "us/iter",
            "extra": "iterations: 173725\ncpu: 4.180206533314191 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 5.371938591451567,
            "unit": "us/iter",
            "extra": "iterations: 120081\ncpu: 5.371918854773079 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.1895999700098951,
            "unit": "us/iter",
            "extra": "iterations: 560178\ncpu: 1.1891701762654328 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 2.121684380875936,
            "unit": "us/iter",
            "extra": "iterations: 337695\ncpu: 2.121690093131434 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.7172736910113252,
            "unit": "us/iter",
            "extra": "iterations: 981311\ncpu: 0.7172197478679042 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.740624751233786,
            "unit": "us/iter",
            "extra": "iterations: 909991\ncpu: 0.7405391624752202 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 3.0911911827263974,
            "unit": "us/iter",
            "extra": "iterations: 211562\ncpu: 3.091084202266968 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.377519641890243,
            "unit": "us/iter",
            "extra": "iterations: 513138\ncpu: 1.3772044907997685 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 3.699497584406218,
            "unit": "us/iter",
            "extra": "iterations: 179873\ncpu: 3.6994495505162477 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.7957269490393286,
            "unit": "us/iter",
            "extra": "iterations: 824868\ncpu: 0.7954657642192454 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.7900563706508335,
            "unit": "us/iter",
            "extra": "iterations: 950264\ncpu: 0.7899902921714165 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 2.011400425196664,
            "unit": "us/iter",
            "extra": "iterations: 317500\ncpu: 2.0107621826771425 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 1.8538939645465535,
            "unit": "us/iter",
            "extra": "iterations: 367462\ncpu: 1.8539008169552469 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 4.884858345010722,
            "unit": "us/iter",
            "extra": "iterations: 137729\ncpu: 4.884819369922037 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 3.3617202766824357,
            "unit": "us/iter",
            "extra": "iterations: 193291\ncpu: 3.3612809442757756 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 2.1296543084366073,
            "unit": "us/iter",
            "extra": "iterations: 325559\ncpu: 2.129574126348837 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 2.61815170184595,
            "unit": "us/iter",
            "extra": "iterations: 263596\ncpu: 2.6177629933686832 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 0.2129668325764536,
            "unit": "us/iter",
            "extra": "iterations: 3510342\ncpu: 0.21296426103211696 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 3.021543975238877,
            "unit": "us/iter",
            "extra": "iterations: 233586\ncpu: 3.0210472245768365 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.1986130509404966,
            "unit": "us/iter",
            "extra": "iterations: 603604\ncpu: 1.1985689524920453 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.3108114206305432,
            "unit": "us/iter",
            "extra": "iterations: 557675\ncpu: 1.3104219339220442 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 2.2377211531989056,
            "unit": "us/iter",
            "extra": "iterations: 312383\ncpu: 2.2376866634868566 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 3.823467310495423,
            "unit": "us/iter",
            "extra": "iterations: 193426\ncpu: 3.8225465139123416 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 3.609490475781892,
            "unit": "us/iter",
            "extra": "iterations: 198389\ncpu: 3.6093265654849596 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 2.6404540961788867,
            "unit": "us/iter",
            "extra": "iterations: 268311\ncpu: 2.6399076966654285 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 4.075379479177049,
            "unit": "us/iter",
            "extra": "iterations: 163395\ncpu: 4.075315903179407 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 5.619606266269925,
            "unit": "us/iter",
            "extra": "iterations: 116401\ncpu: 5.592937483354789 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.2858917142007988,
            "unit": "us/iter",
            "extra": "iterations: 552584\ncpu: 1.28587248273565 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 2.266165902662577,
            "unit": "us/iter",
            "extra": "iterations: 312171\ncpu: 2.2654240336225837 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.7437765314217628,
            "unit": "us/iter",
            "extra": "iterations: 861177\ncpu: 0.7437256208653807 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.7703729310011471,
            "unit": "us/iter",
            "extra": "iterations: 875363\ncpu: 0.77034802361992 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 3.1787059785429084,
            "unit": "us/iter",
            "extra": "iterations: 204866\ncpu: 3.178141175207217 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.3712251772932824,
            "unit": "us/iter",
            "extra": "iterations: 487185\ncpu: 1.3711860053162468 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 3.7980583565512522,
            "unit": "us/iter",
            "extra": "iterations: 171566\ncpu: 3.797541092057794 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.82054031237276,
            "unit": "us/iter",
            "extra": "iterations: 922744\ncpu: 0.8205264916379662 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.8254488927552186,
            "unit": "us/iter",
            "extra": "iterations: 824208\ncpu: 0.8251715792615414 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 2.1909781595588718,
            "unit": "us/iter",
            "extra": "iterations: 338180\ncpu: 2.190955618309779 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 1.8628673581004662,
            "unit": "us/iter",
            "extra": "iterations: 385768\ncpu: 1.8623065780468957 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 5.211804224595632,
            "unit": "us/iter",
            "extra": "iterations: 139895\ncpu: 5.211829550734451 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 3.3590229505367972,
            "unit": "us/iter",
            "extra": "iterations: 220387\ncpu: 3.358535226669377 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 2.2075624458736542,
            "unit": "us/iter",
            "extra": "iterations: 319853\ncpu: 2.2074234351405266 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 2.754053151284455,
            "unit": "us/iter",
            "extra": "iterations: 240521\ncpu: 2.7535597972734087 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 0.2065594999846068,
            "unit": "us/iter",
            "extra": "iterations: 3432774\ncpu: 0.20656015513984355 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 3.031137980297294,
            "unit": "us/iter",
            "extra": "iterations: 228895\ncpu: 3.030987658096517 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 1.2005879760751434,
            "unit": "us/iter",
            "extra": "iterations: 536680\ncpu: 1.2004674386972125 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.2738641080346707,
            "unit": "us/iter",
            "extra": "iterations: 544197\ncpu: 1.2738401148848366 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 2.3781143201860906,
            "unit": "us/iter",
            "extra": "iterations: 309989\ncpu: 2.377346828435755 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 3.8020995413090577,
            "unit": "us/iter",
            "extra": "iterations: 185310\ncpu: 3.802069478171751 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 3.515620708264198,
            "unit": "us/iter",
            "extra": "iterations: 187162\ncpu: 3.5153506694736265 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 2.4693259314929517,
            "unit": "us/iter",
            "extra": "iterations: 283443\ncpu: 2.4692693592715247 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 4.220072516965818,
            "unit": "us/iter",
            "extra": "iterations: 171091\ncpu: 4.220033485104717 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 5.575960921318301,
            "unit": "us/iter",
            "extra": "iterations: 120219\ncpu: 5.575907593641657 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.2607459785397255,
            "unit": "us/iter",
            "extra": "iterations: 556390\ncpu: 1.2604542029871821 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 2.219976463158952,
            "unit": "us/iter",
            "extra": "iterations: 330928\ncpu: 2.2199309910313283 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.7572705215511985,
            "unit": "us/iter",
            "extra": "iterations: 980920\ncpu: 0.7569841821963309 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.7819267411709188,
            "unit": "us/iter",
            "extra": "iterations: 774364\ncpu: 0.7819311409105133 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 3.2327628796255157,
            "unit": "us/iter",
            "extra": "iterations: 207013\ncpu: 3.2322213967238773 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.4255112981142646,
            "unit": "us/iter",
            "extra": "iterations: 523937\ncpu: 1.425516634633495 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 3.84929331849483,
            "unit": "us/iter",
            "extra": "iterations: 189613\ncpu: 3.8484801200338223 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.8091159245599204,
            "unit": "us/iter",
            "extra": "iterations: 914267\ncpu: 0.80908540612312 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.8072687334654103,
            "unit": "us/iter",
            "extra": "iterations: 887556\ncpu: 0.8071853111240637 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 2.114540347945246,
            "unit": "us/iter",
            "extra": "iterations: 330339\ncpu: 2.1139132951301898 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 1.8496436010162511,
            "unit": "us/iter",
            "extra": "iterations: 371895\ncpu: 1.8495878325872288 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 5.031493430487121,
            "unit": "us/iter",
            "extra": "iterations: 129690\ncpu: 5.029629069319272 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 3.314060941602684,
            "unit": "us/iter",
            "extra": "iterations: 220900\ncpu: 3.314020887279492 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 2.0755854783155527,
            "unit": "us/iter",
            "extra": "iterations: 338542\ncpu: 2.075040033437594 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 2.6915195703179333,
            "unit": "us/iter",
            "extra": "iterations: 252372\ncpu: 2.6915013868415647 us\nthreads: undefined"
          },
          {
            "name": "BM_SELECT_RANDOM_OBJECT/real_time",
            "value": 12.119961657299196,
            "unit": "ns/iter",
            "extra": "iterations: 58924386\ncpu: 12.11702338315431 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 45.99467795199253,
            "unit": "ns/iter",
            "extra": "iterations: 12837915\ncpu: 45.98914714733596 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 53.40176291625544,
            "unit": "ns/iter",
            "extra": "iterations: 11751097\ncpu: 53.40075654213275 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 62.630174161752095,
            "unit": "ns/iter",
            "extra": "iterations: 11825442\ncpu: 62.616955543820104 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 72.56822977049643,
            "unit": "ns/iter",
            "extra": "iterations: 9310855\ncpu: 72.56852415808741 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 80.23542254994223,
            "unit": "ns/iter",
            "extra": "iterations: 8401315\ncpu: 80.22756675591653 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 93.32930680183773,
            "unit": "ns/iter",
            "extra": "iterations: 7324832\ncpu: 94.16676805692664 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 109.99537067908234,
            "unit": "ns/iter",
            "extra": "iterations: 6118608\ncpu: 109.99275930081382 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 126.50537059759164,
            "unit": "ns/iter",
            "extra": "iterations: 6199217\ncpu: 126.47705089207257 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 139.33350833636837,
            "unit": "ns/iter",
            "extra": "iterations: 4594206\ncpu: 139.32134170735955 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 61.99355323007736,
            "unit": "ns/iter",
            "extra": "iterations: 11926748\ncpu: 61.993225060176755 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 65.80898998470765,
            "unit": "ns/iter",
            "extra": "iterations: 9094031\ncpu: 65.79206118826768 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 74.6376696809255,
            "unit": "ns/iter",
            "extra": "iterations: 9739679\ncpu: 74.63669408406659 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 89.3006638470498,
            "unit": "ns/iter",
            "extra": "iterations: 8544589\ncpu: 89.27111859915615 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 96.15174041926687,
            "unit": "ns/iter",
            "extra": "iterations: 6976882\ncpu: 96.15210419210412 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 108.78530165231703,
            "unit": "ns/iter",
            "extra": "iterations: 5844344\ncpu: 108.77710278517972 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 117.59356018400365,
            "unit": "ns/iter",
            "extra": "iterations: 6200084\ncpu: 117.56304462972042 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 141.98010439389643,
            "unit": "ns/iter",
            "extra": "iterations: 5272722\ncpu: 141.97723604620845 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 152.34272729755244,
            "unit": "ns/iter",
            "extra": "iterations: 4441327\ncpu: 152.2961308635834 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 101.59199750069482,
            "unit": "ns/iter",
            "extra": "iterations: 7288323\ncpu: 101.59054558915864 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 185.07087757769355,
            "unit": "ns/iter",
            "extra": "iterations: 3868854\ncpu: 185.00210785932182 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 350.27658554014266,
            "unit": "ns/iter",
            "extra": "iterations: 1934924\ncpu: 350.24931780263876 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 747.1555035627672,
            "unit": "ns/iter",
            "extra": "iterations: 811647\ncpu: 747.1056321282099 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 1740.4298786596444,
            "unit": "ns/iter",
            "extra": "iterations: 399208\ncpu: 1740.4405823531042 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 3603.463964786821,
            "unit": "ns/iter",
            "extra": "iterations: 180393\ncpu: 3603.3476742446064 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 8637.758643803132,
            "unit": "ns/iter",
            "extra": "iterations: 74591\ncpu: 8636.346958748278 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 23583.20143729096,
            "unit": "ns/iter",
            "extra": "iterations: 27830\ncpu: 23582.782141572956 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 66892.67410001776,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 66875.13610000338 ns\nthreads: undefined"
          }
        ]
      }
    ]
  }
}