import React from 'react';
import { Post } from '../Post';

import { Container } from './styles';

export const PostList: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <ul>
          <Post 
            image='https://github.com/matheuspython.png'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore, totam velit commodi minima at voluptatum eum? Impedit atque, aspernatur asperiores consequuntur doloremque et perferendis tempora inventore molestias voluptatum non dolorem sint corrupti ad nostrum sapiente cupiditate, veritatis repellendus modi soluta odit nulla deleniti eveniet incidunt. Cum incidunt ducimus maxime eius hic culpa ipsum quis illum dolore sed doloribus distinctio autem laborum dignissimos, nemo, harum delectus doloremque excepturi deleniti id repellendus quod ut aut. Animi cupiditate odit sunt, dolor suscipit provident maiores consectetur velit adipisci tempore perspiciatis ad magnam earum saepe esse itaque nostrum molestiae tempora nam aliquam. Consectetur sapiente doloremque consequuntur officia est nihil sint assumenda! Quis consectetur inventore, numquam recusandae a odio quae. Doloribus quas libero labore odit qui dolorum omnis atque quod similique facilis voluptate quisquam modi magnam, excepturi deserunt debitis, repellendus cumque maiores voluptatibus esse accusantium molestiae. Vero libero corporis asperiores quidem sequi quia maiores praesentium. Dolores velit praesentium nam placeat officiis ut totam voluptatibus sit necessitatibus obcaecati atque est, rerum magnam, odit ex. Dolorem molestiae nihil, modi facilis, pariatur voluptatum eius ea quam rem architecto qui maxime amet! Vitae quis obcaecati quibusdam minus, delectus quidem.'
            title='seila'
          />
                <Post 
            image='https://github.com/matheuspython.png'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore, totam velit commodi minima at voluptatum eum? Impedit atque, aspernatur asperiores consequuntur doloremque et perferendis tempora inventore molestias voluptatum non dolorem sint corrupti ad nostrum sapiente cupiditate, veritatis repellendus modi soluta odit nulla deleniti eveniet incidunt. Cum incidunt ducimus maxime eius hic culpa ipsum quis illum dolore sed doloribus distinctio autem laborum dignissimos, nemo, harum delectus doloremque excepturi deleniti id repellendus quod ut aut. Animi cupiditate odit sunt, dolor suscipit provident maiores consectetur velit adipisci tempore perspiciatis ad magnam earum saepe esse itaque nostrum molestiae tempora nam aliquam. Consectetur sapiente doloremque consequuntur officia est nihil sint assumenda! Quis consectetur inventore, numquam recusandae a odio quae. Doloribus quas libero labore odit qui dolorum omnis atque quod similique facilis voluptate quisquam modi magnam, excepturi deserunt debitis, repellendus cumque maiores voluptatibus esse accusantium molestiae. Vero libero corporis asperiores quidem sequi quia maiores praesentium. Dolores velit praesentium nam placeat officiis ut totam voluptatibus sit necessitatibus obcaecati atque est, rerum magnam, odit ex. Dolorem molestiae nihil, modi facilis, pariatur voluptatum eius ea quam rem architecto qui maxime amet! Vitae quis obcaecati quibusdam minus, delectus quidem.'
            title='seila'
          />
          

        </ul>
        
      </div>  
    </Container>
  )
}

