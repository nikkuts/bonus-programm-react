import css from './Partner.module.css';

export default function Partner({partner}) {
  
      return (
        <div>
                <tr>
                    <td className={css.td}>{partner.email}</td>
                    <td className={css.td}>{partner.email}</td>
                    <td className={css.td}>{partner.email}</td>
                    <td className={css.td}>{partner.email}</td>
                </tr>
      
        </div>
      );
    };