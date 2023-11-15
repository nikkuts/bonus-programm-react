import { useSearchParams } from "react-router-dom";

const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
    },
  };
  
  export default function Home() {
    const [searchParams] = useSearchParams();
    const inviterId = searchParams.get("x");
    window.localStorage.setItem("inviterId", JSON.stringify(inviterId));

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>
          Бонусна програма
        </h1>
      </div>
    );
  };