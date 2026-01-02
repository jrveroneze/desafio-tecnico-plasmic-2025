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

type SortOrder = 'none' | 'asc' | 'desc';

function ContactsPage() {
	const router = useRouter();

	const [sortOrder, setSortOrder] = React.useState<SortOrder>('none');

	const contacts: Contact[] = React.useMemo(
		() => [
			{
				name: 'Patrizio Randalson',
				email: 'prandalson0@prlog.org',
				image:
					'https://ui-avatars.com/api/?name=Patrizio+Randalson&size=150&background=2563eb&color=fff',
			},
			{
				name: 'Demetris Korb',
				email: 'dkorb0@mit.edu',
				image:
					'https://ui-avatars.com/api/?name=Demetris+Korb&size=150&background=16a34a&color=fff',
			},
			{
				name: 'Riley Wimlet',
				email: 'rwimlet2@spiegel.de',
				image:
					'https://ui-avatars.com/api/?name=Riley+Wimlet&size=150&background=dc2626&color=fff',
			},
			{
				name: 'Ruperto Catterson',
				email: 'rcatterson3@sitemeter.com',
				image:
					'https://ui-avatars.com/api/?name=Ruperto+Catterson&size=150&background=9333ea&color=fff',
			},
			{
				name: 'Carolin Rainy',
				email: 'crainy4@sakura.ne.jp',
				image:
					'https://ui-avatars.com/api/?name=Carolin+Rainy&size=150&background=ea580c&color=fff',
			},
			{
				name: 'Orville Duesbury',
				email: 'oduesbury5@mit.edu',
				image:
					'https://ui-avatars.com/api/?name=Orville+Duesbury&size=150&background=0891b2&color=fff',
			},
		],
		[]
	);

	const sortedContacts = React.useMemo(() => {
		if (sortOrder === 'none') {
			return contacts;
		}

		const sorted = [...contacts].sort((a, b) => {
			const nameA = a.name.toLowerCase();
			const nameB = b.name.toLowerCase();

			if (sortOrder === 'asc') {
				return nameA.localeCompare(nameB);
			} else {
				return nameB.localeCompare(nameA);
			}
		});

		return sorted;
	}, [contacts, sortOrder]);

	const handleMenuClick = React.useCallback((value: string) => {
		switch (value) {
			case 'sortAZ':
				setSortOrder('asc');
				break;
			case 'sortZA':
				setSortOrder('desc');
				break;
			case 'newContact':
				break;
			default:
				console.log('Invalid action:', value);
				break;
		}
	}, []);

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
						onMenuClick={handleMenuClick}
					/>
					{sortedContacts.map((contact) => (
						<ContactListComponent key={contact.email} currentItem={contact} />
					))}
				</div>
			</PageParamsProvider__>
		</GlobalContextsProvider>
	);
}

export default ContactsPage;
