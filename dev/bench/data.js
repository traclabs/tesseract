window.BENCHMARK_DATA = {
  "lastUpdate": 1593548354487,
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
      }
    ]
  }
}