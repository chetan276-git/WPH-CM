// import { useState } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

// import data from '../../data/data.json';

export default function Home({ dataExport }) {
  const router = useRouter();
  const { name } = router.query;

  //   const [description, setDescription] = useState('');
  //   let description;
  // option 1
  //   useEffect(() => {
  //     if (!router.isReady) return;
  //     data.map(function (item) {
  //       if (item.name === name) {
  //         setDescription(item.name + ' : ' + item.description);
  //       }
  //     });
  //   }, [router.query.name, router.isReady]);

  //   option2 server side props
  //   useEffect(() => {
  //     dataExport.map(function (item) {
  //       if (item.name === name) {
  //         setDescription(item.name + ' : ' + item.description);
  //       }
  //     });
  //   }, []);

  // option 3 server side props

  //   dataExport.map(function (item) {
  //     if (item.name === name) {
  //       if (item.name === name) {
  //         description = item.name + ' : ' + item.description;
  //       }
  //     }
  //   });

  return (
    <>
      <div>
        {dataExport.map(function (item) {
          if (item.name === name) {
            return (
              <div key={item.id}>
                {/* Sidebar */}
                <ul>
                  <li>
                    <Link href={`${item.name}`}>{item.name}</Link>
                  </li>
                </ul>
                {item.content}
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const url = 'http://localhost:3000/api/blogdata';
  const res = await fetch(url);
  const dataExport = await res.json();
  return { props: { dataExport } };
}
