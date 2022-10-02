
import styles from './NotFoundBlock.module.scss'


const NotFoundBlock = () => {

   return (
      <div className={styles.root}>
         <h1>Страница не найдена</h1>
         <button>Вернуться на главную страницу</button>
      </div>
   )
};

export default NotFoundBlock;