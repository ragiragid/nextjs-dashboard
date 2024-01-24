import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
// Chapter.16 編集しているデータ名をタイトルに含めるため、ここは Metadataオブジェクトではなく generateMetadata を使用
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  // generateMetadata で使用するため、URLに含まれる動的部分をparamとして定義
  params: { id: string } 
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  return {
    title: `Edit Invoice [${id}]`,
  }
}
 
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);
  if (!invoice) {
    notFound();
  }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}