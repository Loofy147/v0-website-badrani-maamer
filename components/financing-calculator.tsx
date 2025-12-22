"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/lib/language-context"
import type { FinancingOption } from "@/lib/types"
import { Calculator, CheckCircle2 } from "lucide-react"
import { Badge } from "./ui/badge"

interface FinancingCalculatorProps {
  financingOptions: FinancingOption[]
  propertyPrice?: number
}

export function FinancingCalculator({ financingOptions, propertyPrice = 0 }: FinancingCalculatorProps) {
  const { t, language } = useLanguage()
  const [price, setPrice] = useState(propertyPrice || 0)
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [calculation, setCalculation] = useState<{
    downPayment: number
    loanAmount: number
    monthlyPayment: number
    totalPayment: number
    totalInterest: number
  } | null>(null)

  const selectedFinancing = financingOptions.find((opt) => opt.id === selectedOption)

  useEffect(() => {
    if (price > 0 && selectedFinancing) {
      calculateFinancing()
    }
  }, [price, selectedOption])

  const calculateFinancing = () => {
    if (!selectedFinancing || price <= 0) return

    const downPaymentAmount = (price * selectedFinancing.down_payment_percentage) / 100
    const loanAmount = price - downPaymentAmount
    const monthlyInterestRate = selectedFinancing.interest_rate / 100 / 12
    const numberOfPayments = selectedFinancing.duration_months

    let monthlyPayment = 0
    if (selectedFinancing.is_islamic) {
      // Islamic financing (Murabaha) - simple markup
      const markup = (loanAmount * selectedFinancing.interest_rate) / 100
      const totalAmount = loanAmount + markup
      monthlyPayment = totalAmount / numberOfPayments
    } else if (monthlyInterestRate > 0) {
      // Conventional financing with interest
      monthlyPayment =
        (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
    } else {
      // Interest-free
      monthlyPayment = loanAmount / numberOfPayments
    }

    const totalPayment = downPaymentAmount + monthlyPayment * numberOfPayments
    const totalInterest = totalPayment - price

    setCalculation({
      downPayment: downPaymentAmount,
      loanAmount,
      monthlyPayment,
      totalPayment,
      totalInterest,
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(language === "ar" ? "ar-DZ" : "fr-DZ", {
      style: "currency",
      currency: "DZD",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          <CardTitle>{t("financing.calculate")}</CardTitle>
        </div>
        <CardDescription>{t("financing.subtitle")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="price">{language === "ar" ? "سعر العقار (دج)" : "Prix de la propriété (DZD)"}</Label>
          <Input
            id="price"
            type="number"
            value={price || ""}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="8500000"
            min="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="financing">{language === "ar" ? "خيار التمويل" : "Option de financement"}</Label>
          <Select value={selectedOption} onValueChange={setSelectedOption}>
            <SelectTrigger>
              <SelectValue placeholder={language === "ar" ? "اختر خيار التمويل" : "Sélectionner une option"} />
            </SelectTrigger>
            <SelectContent>
              {financingOptions.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  <div className="flex items-center gap-2">
                    <span>{language === "ar" ? option.name_ar : option.name_fr}</span>
                    {option.is_islamic && <Badge variant="secondary">{t("financing.islamic")}</Badge>}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedFinancing && (
          <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{t("financing.downPayment")}</span>
              <span className="font-semibold">{selectedFinancing.down_payment_percentage}%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{t("financing.duration")}</span>
              <span className="font-semibold">
                {selectedFinancing.duration_months} {t("financing.months")}
              </span>
            </div>
            {!selectedFinancing.is_islamic && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{language === "ar" ? "معدل الفائدة" : "Taux d'intérêt"}</span>
                <span className="font-semibold">{selectedFinancing.interest_rate}%</span>
              </div>
            )}
            {selectedFinancing.bank_partner && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  {language === "ar" ? "البنك الشريك" : "Banque partenaire"}
                </span>
                <span className="font-semibold">{selectedFinancing.bank_partner}</span>
              </div>
            )}
          </div>
        )}

        {calculation && (
          <div className="space-y-4 pt-4 border-t">
            <h4 className="font-semibold text-lg">{language === "ar" ? "نتائج الحساب" : "Résultats du calcul"}</h4>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                <span className="text-sm font-medium">{t("financing.downPayment")}</span>
                <span className="font-bold text-primary">{formatCurrency(calculation.downPayment)}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                <span className="text-sm font-medium">{t("financing.monthlyPayment")}</span>
                <span className="font-bold text-lg">{formatCurrency(calculation.monthlyPayment)}</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 border rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">
                    {language === "ar" ? "مبلغ القرض" : "Montant du prêt"}
                  </p>
                  <p className="font-semibold">{formatCurrency(calculation.loanAmount)}</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">
                    {language === "ar" ? "المبلغ الإجمالي" : "Total à payer"}
                  </p>
                  <p className="font-semibold">{formatCurrency(calculation.totalPayment)}</p>
                </div>
              </div>

              {calculation.totalInterest > 0 && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>
                    {language === "ar" ? "الفائدة الإجمالية: " : "Intérêts totaux : "}
                    {formatCurrency(calculation.totalInterest)}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
