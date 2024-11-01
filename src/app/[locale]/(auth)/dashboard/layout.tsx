export default function DashboardLayout(props: { children: React.ReactNode }) {
  return (
    <>
      {props.children}
    </>
  );
}

export const dynamic = 'force-dynamic';
