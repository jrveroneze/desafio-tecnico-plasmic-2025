import * as React from 'react';
import { PageParamsProvider as PageParamsProvider__ } from '@plasmicapp/react-web/lib/host';
import { useRouter } from 'next/router';
import GlobalContextsProvider from '../../components/plasmic/copy_of_teste_plasmic_sync/PlasmicGlobalContextsProvider';

import PageTitleComponent from '@/components/PageTitleComponent';
import ContactListComponent from '@/components/ContactListComponent';

import styles from '@/styles/Contacts.module.css';

interface Contact {
	name: string;
	email: string;
	image: string;
}

function ContactsPage() {
	const router = useRouter();

	const contacts: Contact[] = React.useMemo(
		() => [
			{
				name: 'Patrizio Randalson',
				email: 'prandalson0@prlog.org',
				image:
					'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkNDYwMDUuanBlZw==',
			},
			{
				name: 'Demetris Korb',
				email: 'dkorb0@mit.edu',
				image:
					'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkMTY0NDkuanBlZw==',
			},
			{
				name: 'Riley Wimlet',
				email: 'rwimlet2@spiegel.de',
				image:
					'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkMzA5ODcuanBlZw==',
			},
			{
				name: 'Ruperto Catterson',
				email: 'rcatterson3@sitemeter.com',
				image:
					'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkOTYzMC5qcGVn',
			},

			{
				name: 'Carolin Rainy',
				email: 'crainy4@sakura.ne.jp',
				image:
					'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkNDc4NjcuanBlZw==',
			},
			{
				name: 'Orville Duesbury',
				email: 'oduesbury5@mit.edu',
				image:
					'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQ0MDYyNi5qcGVn',
			},
		],
		[]
	);

	return (
		<GlobalContextsProvider>
			<PageParamsProvider__
				route={router?.pathname}
				params={router?.query}
				query={router?.query}
			>
				<div className={styles.container}>
					<PageTitleComponent
						title="Contatos"
						actions={[
							{
								type: 'item',
								value: 'newContact',
								label: '\u2795 Novo contato',
							},
							{ type: 'divider' },
							{ type: 'item', value: 'sortAZ', label: 'Ordenar A-Z' },
							{ type: 'item', value: 'sortZA', label: 'Ordenar Z-A' },
						]}
					/>
					{contacts.map((contact) => (
						<ContactListComponent key={contact.email} currentItem={contact} />
					))}
				</div>
			</PageParamsProvider__>
		</GlobalContextsProvider>
	);
}

export default ContactsPage;
