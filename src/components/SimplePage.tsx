type SimplePageProps = {
  title: string;
};

function SimplePage({ title }: SimplePageProps) {
  return (
    <main className="min-h-screen bg-[#F7F8F5] px-8 py-10 md:ml-[250px]">
      <h1 className="text-3xl font-extrabold text-[#172018]">{title}</h1>

      <p className="mt-2 text-sm text-[#8A918C]">
        This page is ready to build.
      </p>
    </main>
  );
}

export default SimplePage;
