//import UserProfile from '@/components/UserProfile';

import Container from '../Container';
import Footer from '../Footer';
import Header from '../Header';
import StickySocials from '../StickySocials';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div style={{ backgroundColor: '#FFF' }}>
      <div className='absolute z-[100]'>
        <StickySocials />
      </div>
      <Container>
        <main className=''>
          <Header />

          <div className=''>{children}</div>

          <Footer />
        </main>
      </Container>
    </div>
  );
}
