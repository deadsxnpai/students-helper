import React from 'react'
import { MainLayout } from '@/shared/layouts'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text/Text'
import cls from './AboutPage.module.less'

const AboutPage = () => {
    return (
        <MainLayout className={cls.main}>
            <VStack gap="16" align="center">
                <Text
                    className={cls.Text}
                    size="l"
                    text="Добро пожаловать в систему поддержки принятия решений по выбору учебных предметов!"
                />
                <Text
                    className={cls.Text}
                    size="m"
                    text="Наша система разработана для того, чтобы помочь вам эффективно выбрать учебные дисциплины, которые наиболее соответствуют вашим интересам и образовательным целям."
                />
                <Text
                    className={cls.Text}
                    size="m"
                    text="Мы понимаем, что процесс выбора предметов может быть сложным и запутанным, особенно когда существует множество вариантов. Наша цель — упростить этот процесс, предоставляя инструменты, которые помогут принять обоснованное и взвешенное решение."
                />
                <Text
                    className={cls.Text}
                    size="m"
                    text="Система анализирует ваши предпочтения, цели и текущий уровень знаний, чтобы предложить оптимальные предметы для обучения. Она учитывает как ваши текущие потребности, так и долгосрочные перспективы, позволяя строить индивидуальную образовательную траекторию."
                />
                <Text
                    className={cls.Text}
                    size="m"
                    text="Система предоставляет персонализированный опыт, адаптированный к вашим уникальным потребностям. Мы уверены, что с нашей системой вы сможете принимать осознанные решения и планировать обучение максимально эффективно."
                />
            </VStack>
        </MainLayout>
    )
}

export default AboutPage
